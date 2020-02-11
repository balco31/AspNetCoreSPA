using AspNetCoreSPA.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCoreSPA.Controllers
{
    [Authorize(Policy = "MyPolicy")]
    public class AnotherController : BaseController
    {
        public AnotherController(IServiceProvider serviceProvider) : base(serviceProvider)
        {

        }
        
        public IActionResult Index()
        {
            var viewModel = new AnotherViewModel()
            {
                Info = "this is another Controller to check."
            };
            return CustomView(viewModel);
        }
    }
}
