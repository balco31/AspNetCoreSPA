using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using AspNetCoreSPA.Code;
using Interfaces;
using Interfaces.Models;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json.Serialization;
using SecurityLib.Authentication;
using SecurityLib.Session;
using Services;

namespace AspNetCoreSPA
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews(options =>
                options.Conventions.Add(new ControllerNameAttributeConvention())
            ).AddNewtonsoftJson(options => {
                options.SerializerSettings.DateTimeZoneHandling = Newtonsoft.Json.DateTimeZoneHandling.Utc;
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                options.SerializerSettings.ContractResolver = new DefaultContractResolver();
            }).AddViewLocalization(LanguageViewLocationExpanderFormat.SubFolder);

            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
            .AddCookie(CookieAuthenticationDefaults.AuthenticationScheme, options =>
            {
                //TODO: set appropriate pages 
                options.Cookie.Name = "My_Cookie";
                options.LoginPath = "/Login/Index";
                options.LogoutPath = "/Login/Logout";
                options.AccessDeniedPath = "/Login/Index";
                options.Cookie.SecurePolicy = CookieSecurePolicy.SameAsRequest;
                options.CookieManager = new CustomCookieManager();
                options.Events.OnSigningIn = (a) =>
                {
                    return Task.CompletedTask;
                };
            });

            services.AddAuthorization(auth => {
                auth.AddPolicy("MyPolicy", policy => {
                    policy.RequireAuthenticatedUser();
                    policy.AddRequirements(new CustomAuthorizationRequirement());
                    policy.Build();
                });
            });
            services.AddScoped<IAuthorizationHandler, CustomAuthorizationHandler>();

            services.AddHttpContextAccessor();

            services.AddCustomSession(options => {
                options.Cookie.IsEssential = true;
                options.IdleTimeout = TimeSpan.FromMinutes(Configuration.GetValue<double>("clientCookieTimeOut", 10));
                options.Cookie.HttpOnly = true;
            });

            services.Configure<RequestLocalizationOptions>(options => {
                var supportedCultures = new[]
                {
                    new CultureInfo("en-US"),
                    new CultureInfo("el-GR"),
                };

                options.DefaultRequestCulture = new RequestCulture(culture: "en-US", uiCulture: "en-US");
                // Formatting numbers, dates, etc.
                options.SupportedCultures = supportedCultures;
                // UI strings that we have localized.
                options.SupportedUICultures = supportedCultures;
                options.AddInitialRequestCultureProvider(new CustomRequestCultureProvider(async context => {
                    if (context.Session != null && context.Session.Keys.Contains("WebAppContext"))
                    {
                        var appcontext = context.Session.Get<ApplicationContext>("WebAppContext");
                        return new ProviderCultureResult(appcontext.CurrentCulture);
                    }
                    return new ProviderCultureResult("en-US");
                }));
            });

            services.AddScoped<IAppContextHandler, AppContextHandler>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseCustomSession();
            app.UseRequestLocalization();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}")
                .RequireAuthorization("MyPolicy");
                
            });
        }
    }
}
