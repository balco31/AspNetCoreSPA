using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Text;

namespace SecurityLib.Session
{
    /// <summary>
    /// Extension methods for adding the <see cref="SessionMiddleware"/> to an application.
    /// </summary>
    public static class SessionMiddlewareExtensions
    {
        /// <summary>
        /// Adds the <see cref="SessionMiddleware"/> to automatically enable session state for the application.
        /// </summary>
        /// <param name="app">The <see cref="IApplicationBuilder"/>.</param>
        /// <returns>The <see cref="IApplicationBuilder"/>.</returns>
        public static IApplicationBuilder UseCustomSession(this IApplicationBuilder app)
        {
            if (app == null)
            {
                throw new ArgumentNullException(nameof(app));
            }

            return app.UseMiddleware<CustomSessionMiddleware>();
        }

        /// <summary>
        /// Adds the <see cref="SessionMiddleware"/> to automatically enable session state for the application.
        /// </summary>
        /// <param name="app">The <see cref="IApplicationBuilder"/>.</param>
        /// <param name="options">The <see cref="SessionOptions"/>.</param>
        /// <returns>The <see cref="IApplicationBuilder"/>.</returns>
        public static IApplicationBuilder UseCustomSession(this IApplicationBuilder app, SessionOptions options)
        {
            if (app == null)
            {
                throw new ArgumentNullException(nameof(app));
            }
            if (options == null)
            {
                throw new ArgumentNullException(nameof(options));
            }

            return app.UseMiddleware<CustomSessionMiddleware>(Options.Create(options));
        }
    }
}
