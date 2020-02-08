using Interfaces;
using Interfaces.Models;
using Microsoft.AspNetCore.Http;
using System;

namespace Services
{
    public class AppContextHandler: IAppContextHandler
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IServiceProvider _serviceProvider;

        public AppContextHandler(IServiceProvider serviceProvider, IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
            _serviceProvider = serviceProvider;
        }

        public ApplicationContext GetContext()
        {
         //   var actualObject = _serviceProvider.GetService(typeof(ApplicationContext));
            var returnValue = this._httpContextAccessor.HttpContext.Session.Get<ApplicationContext>("WebAppContext") as ApplicationContext;
            return returnValue;
        }

        public void SetContext(ApplicationContext appContext)
        {
            this._httpContextAccessor.HttpContext.Session.Set<ApplicationContext>("WebAppContext", appContext);
        }
    }
}
