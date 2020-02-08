using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace AspNetCoreSPA.Controllers
{
    public abstract class BaseController : Controller
    {
        protected readonly IHttpContextAccessor _httpContextAccessor;
        protected readonly IAppContextHandler _appContextHandler;
        protected readonly IConfiguration _configuration;

        public BaseController(IServiceProvider serviceProvider)
        {
            this._httpContextAccessor = serviceProvider.GetRequiredService<IHttpContextAccessor>();
            this._appContextHandler = serviceProvider.GetRequiredService<IAppContextHandler>();
            //this._stringLocalizer = serviceProvider.GetRequiredService<IStringLocalizer<miResources>>();
            _configuration = serviceProvider.GetRequiredService<IConfiguration>();
        }

		[NonAction]
		private void _pageResponseExtraOptions()
		{
			if (_httpContextAccessor.HttpContext.Request.Headers.ContainsKey("midas-isModal") &&
			_httpContextAccessor.HttpContext.Request.Headers["midas-isModal"] == "true")
			{
				ViewData["IsModal"] = true;
			}
			else
			{
				ViewData["IsModal"] = false;
			}
			if (ViewData.ContainsKey("Title"))
			{
				//this._appContextHandler.SetCurrentPageTitle(ViewData["Title"].ToString());
			}
			if (_httpContextAccessor.HttpContext.Request.Query.Any(f => f.Key == "session"))
			{
				ViewData["session"] = _httpContextAccessor.HttpContext.Request.Query.FirstOrDefault(f => f.Key == "session").Value;
			}
		}

		[NonAction]
		public IActionResult CustomView()
		{
			this._pageResponseExtraOptions();

			if (_httpContextAccessor.HttpContext.Request.Headers.ContainsKey("viewtype") &&
				_httpContextAccessor.HttpContext.Request.Headers["viewtype"] == "partials")
			{
				ViewData["isPartial"] = true;
				return PartialView();
			}
			else
			{
				ViewData["isPartial"] = false;
				return View();
			}
		}

		[NonAction]
		public IActionResult CustomView(string viewName)
		{
			this._pageResponseExtraOptions();

			if (_httpContextAccessor.HttpContext.Request.Headers.ContainsKey("viewtype") &&
			   _httpContextAccessor.HttpContext.Request.Headers["viewtype"] == "partials")
			{
				ViewData["isPartial"] = true;
				return PartialView(viewName);
			}
			else
			{
				ViewData["isPartial"] = false;
				return View(viewName);
			}
		}

		[NonAction]
		public IActionResult CustomView(string viewName, object model)
		{
			this._pageResponseExtraOptions();

			if (_httpContextAccessor.HttpContext.Request.Headers.ContainsKey("viewtype") &&
			   _httpContextAccessor.HttpContext.Request.Headers["viewtype"] == "partials")
			{
				ViewData["isPartial"] = true;
				return PartialView(viewName, model);
			}
			else
			{
				ViewData["isPartial"] = false;
				return View(viewName, model);
			}
		}

		[NonAction]
		public IActionResult CustomView(object model)
		{
			this._pageResponseExtraOptions();

			if (_httpContextAccessor.HttpContext.Request.Headers.ContainsKey("viewtype") &&
				_httpContextAccessor.HttpContext.Request.Headers["viewtype"] == "partials")
			{
				ViewData["isPartial"] = true;
				return PartialView(model);
			}
			else
			{
				ViewData["isPartial"] = false;
				return View(model);
			}
		}
	}
}