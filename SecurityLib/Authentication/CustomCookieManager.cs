using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Primitives;
using Microsoft.Net.Http.Headers;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;

namespace SecurityLib.Authentication
{
    public class CustomCookieManager : ICookieManager
    {
        /// <summary>
        /// The default maximum size of characters in a cookie to send back to the client.
        /// </summary>
        public const int DefaultChunkSize = 4050;

        private const string ChunkKeySuffix = "C";
        private const string ChunkCountPrefix = "chunks-";

        public CustomCookieManager()
        {
            // Lowest common denominator. Safari has the lowest known limit (4093), and we leave little extra just in case.
            // See http://browsercookielimits.x64.me/.
            // Leave at least 40 in case CookiePolicy tries to add 'secure', 'samesite=strict' and/or 'httponly'.
            ChunkSize = DefaultChunkSize;
        }

        /// <summary>
        /// The maximum size of cookie to send back to the client. If a cookie exceeds this size it will be broken down into multiple
        /// cookies. Set this value to null to disable this behavior. The default is 4090 characters, which is supported by all
        /// common browsers.
        ///
        /// Note that browsers may also have limits on the total size of all cookies per domain, and on the number of cookies per domain.
        /// </summary>
        public int? ChunkSize { get; set; }

        /// <summary>
        /// Throw if not all chunks of a cookie are available on a request for re-assembly.
        /// </summary>
        public bool ThrowForPartialCookies { get; set; }

        // Parse the "chunks-XX" to determine how many chunks there should be.
        private static int ParseChunksCount(string value)
        {
            if (value != null && value.StartsWith(ChunkCountPrefix, StringComparison.Ordinal))
            {
                var chunksCountString = value.Substring(ChunkCountPrefix.Length);
                int chunksCount;
                if (int.TryParse(chunksCountString, NumberStyles.None, CultureInfo.InvariantCulture, out chunksCount))
                {
                    return chunksCount;
                }
            }
            return 0;
        }

        private AuthenticationTicket ReadAuthCookie(HttpContext context, string encryptedCookie)
        {
            try
            {
                var opt = context.RequestServices.GetRequiredService<IOptionsMonitor<CookieAuthenticationOptions>>();
                var dataProtector = opt.CurrentValue.DataProtectionProvider.CreateProtector("Microsoft.AspNetCore.Authentication.Cookies.CookieAuthenticationMiddleware", CookieAuthenticationDefaults.AuthenticationScheme, "v2");
                var ticketDataFormat = new TicketDataFormat(dataProtector);
                var ticket = ticketDataFormat.Unprotect(encryptedCookie);
                return ticket;
            }
            catch (Exception ex)
            {
                // Log the exception, but do not leak other information
                //logger.ErrorUnprotectingSessionCookie(ex);
                return null;
            }
        }

        private bool IsToCheckRemoteIP(HttpContext context)
        {
            var config = context.RequestServices.GetRequiredService<IConfiguration>();
            var refreshTokenUrl = config.GetValue<bool>("isToCheckRemoteIPInAuthentication");
            return refreshTokenUrl;
        }

        /// <summary>
        /// Get the reassembled cookie. Non chunked cookies are returned normally.
        /// Cookies with missing chunks just have their "chunks-XX" header returned.
        /// </summary>
        /// <param name="context"></param>
        /// <param name="key"></param>
        /// <returns>The reassembled cookie, if any, or null.</returns>
        public string GetRequestCookie(HttpContext context, string key)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }

            if (key == null)
            {
                throw new ArgumentNullException(nameof(key));
            }
            var cookieFromUrl = context.Request.Query.FirstOrDefault(f => f.Key == "session").Value;

            if (string.IsNullOrEmpty(cookieFromUrl))
            {
                return string.Empty;
            }
            
            var myTicket = ReadAuthCookie(context, cookieFromUrl);
            if (myTicket != null)
            {
                var claims = myTicket.Principal.Claims;
                if (claims.Any(f => f.Type == "User-Agent") && claims.Any(f => f.Type == "remoteIp"))
                {
                    var userAgent = claims.FirstOrDefault(f => f.Type == "User-Agent").Value;
                    var remoteIP = claims.FirstOrDefault(f => f.Type == "remoteIp").Value;

                    var remoteIPFromReq = remoteIP;
                    if (this.IsToCheckRemoteIP(context))
                    {
                        //add this check here and if is not working properly just change the configuration isToCheckRemoteIPInAuthentication in appSettings
                        remoteIPFromReq = context.Connection.RemoteIpAddress.ToString();
                    }

                    var userAgentFromReq = context.Request.Headers.FirstOrDefault(f => f.Key == "User-Agent").Value;

                    if ((context.Request.Headers.Any(f => f.Key == "User-Agent") && userAgentFromReq == userAgent) && remoteIPFromReq == remoteIP)
                    {

                    }
                    else
                    {
                        return string.Empty;
                    }
                }
                else
                {
                    return string.Empty;
                }
            }
            else
            {
                return string.Empty;
            }
           
            var value = cookieFromUrl;
            //var requestCookies = context.Request.Cookies;

            //var value = requestCookies[key]; //here is the change get cookie from url
            //var chunksCount = ParseChunksCount(value);
            //if (chunksCount > 0)
            //{
            //    var chunks = new string[chunksCount];
            //    for (var chunkId = 1; chunkId <= chunksCount; chunkId++)
            //    {
            //        var chunk = requestCookies[key + ChunkKeySuffix + chunkId.ToString(CultureInfo.InvariantCulture)];
            //        if (string.IsNullOrEmpty(chunk))
            //        {
            //            if (ThrowForPartialCookies)
            //            {
            //                var totalSize = 0;
            //                for (int i = 0; i < chunkId - 1; i++)
            //                {
            //                    totalSize += chunks[i].Length;
            //                }
            //                throw new FormatException(
            //                    string.Format(
            //                        CultureInfo.CurrentCulture,
            //                        "The chunked cookie is incomplete. Only {0} of the expected {1} chunks were found, totaling {2} characters. A client size limit may have been exceeded.",
            //                        chunkId - 1,
            //                        chunksCount,
            //                        totalSize));
            //            }
            //            // Missing chunk, abort by returning the original cookie value. It may have been a false positive?
            //            return value;
            //        }

            //        chunks[chunkId - 1] = chunk;
            //    }

            //    return string.Join(string.Empty, chunks);
            //}
            return value;
        }

        /// <summary>
        /// Appends a new response cookie to the Set-Cookie header. If the cookie is larger than the given size limit
        /// then it will be broken down into multiple cookies as follows:
        /// Set-Cookie: CookieName=chunks-3; path=/
        /// Set-Cookie: CookieNameC1=Segment1; path=/
        /// Set-Cookie: CookieNameC2=Segment2; path=/
        /// Set-Cookie: CookieNameC3=Segment3; path=/
        /// </summary>
        /// <param name="context"></param>
        /// <param name="key"></param>
        /// <param name="value"></param>
        /// <param name="options"></param>
        public void AppendResponseCookie(HttpContext context, string key, string value, CookieOptions options)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }

            if (key == null)
            {
                throw new ArgumentNullException(nameof(key));
            }

            if (options == null)
            {
                throw new ArgumentNullException(nameof(options));
            }

            var template = new SetCookieHeaderValue(key)
            {
                Domain = options.Domain,
                Expires = options.Expires,
                SameSite = (Microsoft.Net.Http.Headers.SameSiteMode)options.SameSite,
                HttpOnly = options.HttpOnly,
                Path = options.Path,
                Secure = options.Secure,
            };

            var templateLength = template.ToString().Length;

            value = value ?? string.Empty;

            // Normal cookie respond to response Header and then take it and respond to url string
            
            context.Response.Headers.Append(key, value);
            //var responseCookies = context.Response.Cookies;
            //if (!ChunkSize.HasValue || ChunkSize.Value > templateLength + value.Length)
            //{
            //    responseCookies.Append(key, value, options);
            //}
            //else if (ChunkSize.Value < templateLength + 10)
            //{
            //    // 10 is the minimum data we want to put in an individual cookie, including the cookie chunk identifier "CXX".
            //    // No room for data, we can't chunk the options and name
            //    throw new InvalidOperationException("The cookie key and options are larger than ChunksSize, leaving no room for data.");
            //}
            //else
            //{
            //    // Break the cookie down into multiple cookies.
            //    // Key = CookieName, value = "Segment1Segment2Segment2"
            //    // Set-Cookie: CookieName=chunks-3; path=/
            //    // Set-Cookie: CookieNameC1="Segment1"; path=/
            //    // Set-Cookie: CookieNameC2="Segment2"; path=/
            //    // Set-Cookie: CookieNameC3="Segment3"; path=/
            //    var dataSizePerCookie = ChunkSize.Value - templateLength - 3; // Budget 3 chars for the chunkid.
            //    var cookieChunkCount = (int)Math.Ceiling(value.Length * 1.0 / dataSizePerCookie);

            //    responseCookies.Append(key, ChunkCountPrefix + cookieChunkCount.ToString(CultureInfo.InvariantCulture), options);

            //    var offset = 0;
            //    for (var chunkId = 1; chunkId <= cookieChunkCount; chunkId++)
            //    {
            //        var remainingLength = value.Length - offset;
            //        var length = Math.Min(dataSizePerCookie, remainingLength);
            //        var segment = value.Substring(offset, length);
            //        offset += length;

            //        responseCookies.Append(key + ChunkKeySuffix + chunkId.ToString(CultureInfo.InvariantCulture), segment, options);
            //    }
            //}
        }

        /// <summary>
        /// Deletes the cookie with the given key by setting an expired state. If a matching chunked cookie exists on
        /// the request, delete each chunk.
        /// </summary>
        /// <param name="context"></param>
        /// <param name="key"></param>
        /// <param name="options"></param>
        public void DeleteCookie(HttpContext context, string key, CookieOptions options)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }

            if (key == null)
            {
                throw new ArgumentNullException(nameof(key));
            }

            if (options == null)
            {
                throw new ArgumentNullException(nameof(options));
            }

            var keys = new List<string>();
            keys.Add(key + "=");

            var requestCookie = context.Request.Cookies[key];
            var chunks = ParseChunksCount(requestCookie);
            if (chunks > 0)
            {
                for (int i = 1; i <= chunks + 1; i++)
                {
                    var subkey = key + ChunkKeySuffix + i.ToString(CultureInfo.InvariantCulture);
                    keys.Add(subkey + "=");
                }
            }

            var domainHasValue = !string.IsNullOrEmpty(options.Domain);
            var pathHasValue = !string.IsNullOrEmpty(options.Path);

            Func<string, bool> rejectPredicate;
            Func<string, bool> predicate = value => keys.Any(k => value.StartsWith(k, StringComparison.OrdinalIgnoreCase));
            if (domainHasValue)
            {
                rejectPredicate = value => predicate(value) && value.IndexOf("domain=" + options.Domain, StringComparison.OrdinalIgnoreCase) != -1;
            }
            else if (pathHasValue)
            {
                rejectPredicate = value => predicate(value) && value.IndexOf("path=" + options.Path, StringComparison.OrdinalIgnoreCase) != -1;
            }
            else
            {
                rejectPredicate = value => predicate(value);
            }

            var responseHeaders = context.Response.Headers;
            var existingValues = responseHeaders[HeaderNames.SetCookie];
            if (!StringValues.IsNullOrEmpty(existingValues))
            {
                responseHeaders[HeaderNames.SetCookie] = existingValues.Where(value => !rejectPredicate(value)).ToArray();
            }

            AppendResponseCookie(
                context,
                key,
                string.Empty,
                new CookieOptions()
                {
                    Path = options.Path,
                    Domain = options.Domain,
                    SameSite = options.SameSite,
                    IsEssential = options.IsEssential,
                    Expires = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc),
                });

            for (int i = 1; i <= chunks; i++)
            {
                AppendResponseCookie(
                    context,
                    key + "C" + i.ToString(CultureInfo.InvariantCulture),
                    string.Empty,
                    new CookieOptions()
                    {
                        Path = options.Path,
                        Domain = options.Domain,
                        SameSite = options.SameSite,
                        IsEssential = options.IsEssential,
                        Expires = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc),
                    });
            }
        }
    }
}
