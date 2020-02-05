using Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCoreSPA.Code
{
    public class CustomAuthorizationRequirement : IAuthorizationRequirement
    {

    }

    public class CustomAuthorizationHandler : AuthorizationHandler<CustomAuthorizationRequirement>
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IAppContextHandler _appContextHandler;
        private readonly IConfiguration _configuration;

        public CustomAuthorizationHandler(IHttpContextAccessor httpContextAccessor, IAppContextHandler appContextHandler, IConfiguration configuration)
        {
            _httpContextAccessor = httpContextAccessor;
            _appContextHandler = appContextHandler;
            _configuration = configuration;
        }

        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, CustomAuthorizationRequirement requirement)
        {
            if (context.User.Identity.IsAuthenticated)
            {
                var sessionId = this._appContextHandler.GetContext()?.SessionId;
                if (sessionId == context.User.Claims.FirstOrDefault(f => f.Type == "sessionId").Value)
                {
                    context.Succeed(requirement);
                }
                else
                {
                    context.Fail();
                }
            }
            else
            {
                context.Fail();
            }
            return Task.CompletedTask;
        }
    }
}
