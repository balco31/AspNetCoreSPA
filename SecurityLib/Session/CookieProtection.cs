using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Text;

namespace SecurityLib.Session
{
    internal static class CookieProtection
    {
        internal static string Protect(IDataProtector protector, string data)
        {
            if (protector == null)
            {
                throw new ArgumentNullException(nameof(protector));
            }
            if (string.IsNullOrEmpty(data))
            {
                return data;
            }

            var userData = Encoding.UTF8.GetBytes(data);

            var protectedData = protector.Protect(userData);
            return Convert.ToBase64String(protectedData).TrimEnd('=');
        }

        internal static AuthenticationTicket ReadAuthCookie(HttpContext context, string encryptedCookie, ILogger logger)
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
                logger.ErrorUnprotectingSessionCookie(ex);
                return null;
            }
}

        internal static string Unprotect(IDataProtector protector, string protectedText, ILogger logger)
        {
            try
            {
                if (string.IsNullOrEmpty(protectedText))
                {
                    return string.Empty;
                }

                var protectedData = Convert.FromBase64String(Pad(protectedText));
                if (protectedData == null)
                {
                    return string.Empty;
                }

                var userData = protector.Unprotect(protectedData);
                if (userData == null)
                {
                    return string.Empty;
                }

                return Encoding.UTF8.GetString(userData);
            }
            catch (Exception ex)
            {
                // Log the exception, but do not leak other information
                logger.ErrorUnprotectingSessionCookie(ex);
                return string.Empty;
            }
        }

        private static string Pad(string text)
        {
            var padding = 3 - ((text.Length + 3) % 4);
            if (padding == 0)
            {
                return text;
            }
            return text + new string('=', padding);
        }
    }
}
