using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using AspNetCoreSPA.Models;
using Microsoft.AspNetCore.Authorization;

namespace AspNetCoreSPA.Controllers
{
    [Route("")]
    [Route("Home")]
    [Authorize(Policy = "MyPolicy")]
    public class HomeController : BaseController
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger, IServiceProvider serviceProvider): base(serviceProvider)
        {
            _logger = logger;
        }

        [Route("")]
        [Route("Index")]
        public IActionResult Index()
        {
            var isPartialCall = _httpContextAccessor.HttpContext.Request.Headers["viewtype"] == "partials";
            if (isPartialCall)
            {
            }
            return CustomView();
        }

        [Route("Privacy")]

        public IActionResult Privacy()
        {
            return CustomView();
        }

        [Route("Error")]
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
