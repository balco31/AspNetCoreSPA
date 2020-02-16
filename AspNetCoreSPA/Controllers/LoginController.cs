using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AspNetCoreSPA.Models;
using Interfaces;
using Interfaces.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace AspNetCoreSPA.Controllers
{
    public class LoginController : BaseController
    {

        public LoginController(IServiceProvider serviceProvider) : base(serviceProvider)
        {
        }

        [AllowAnonymous]
        public IActionResult Index()
        {
            return View();
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Index(LoginViewModel loginViewModel)
        {
            if ((loginViewModel.UserName == "mitsos" && loginViewModel.Password == "mitsosP")||
                (loginViewModel.UserName == "takis" && loginViewModel.Password == "lakis"))
            {
                var appContext = new ApplicationContext();
                appContext.SessionId = this._httpContextAccessor.HttpContext.Session.Id;
                appContext.UserName = loginViewModel.UserName;
                _appContextHandler.SetContext(appContext);

                var identity = new ClaimsIdentity(CookieAuthenticationDefaults.AuthenticationScheme);
                identity.AddClaim(new Claim("sessionId", this._appContextHandler.GetContext().SessionId));
                identity.AddClaim(new Claim("remoteIp", this._httpContextAccessor.HttpContext.Connection.RemoteIpAddress.ToString()));
                if (HttpContext.Request.Headers.Any(a => a.Key == "User-Agent"))
                {
                    identity.AddClaim(new Claim("User-Agent", _httpContextAccessor.HttpContext.Request.Headers.FirstOrDefault(f => f.Key == "User-Agent").Value));
                }
                if (HttpContext.Request.Headers.Any(a => a.Key == "sessionKey"))
                {
                    identity.AddClaim(new Claim("sessionKey", _httpContextAccessor.HttpContext.Request.Headers.FirstOrDefault(f => f.Key == "sessionKey").Value));
                }
                var principal = new ClaimsPrincipal(identity);
                var authenticationProperties = new AuthenticationProperties();
                authenticationProperties.ExpiresUtc = DateTime.UtcNow.AddMinutes(_configuration.GetValue<double>("clientCookieTimeOut", 10));

                await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal, authenticationProperties);

                var sessionIdValue = _httpContextAccessor.HttpContext.Response.Headers.FirstOrDefault(f => f.Key == "My_Cookie");

                if (!string.IsNullOrEmpty(sessionIdValue.Value))
                {
                    return new JsonResult(new { url = $"/Home/Index?session={sessionIdValue.Value}" });
                }
                else
                {
                    return new JsonResult(new { url = $"/Home/Index" });
                }
            }
            else
            {
                loginViewModel.ErrorMessage = $"Error while checking Credentials!";
                return View(loginViewModel);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            HttpContext.Session.Clear();
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            foreach (var cookieKey in Request.Cookies.Keys)
            {
                Response.Cookies.Delete(cookieKey);
            }

            return AjaxActionSuccess(new { success = true });
        }
    }
}