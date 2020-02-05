AspNet Cookie Authentication without cookie

I needed to create an aspnet-core Application with MVC which will be able to react as a SPA (single page application) without the usage of
an existent SPA JS framework such as Angular. Because of this need I started working in apsnet-core with the usage of the default Cookie Based authentication Mechanism. This mechanism performs the authentication between web server and http web client (browser) through the usage of the cookie section of an Http request. However in this kind of authentication we can have only one customer -client logged in for each web browser (because of the cookie which can be only one per browser  per application domain). But in a SPA environment you may have different client sessions for different client logins through the tabs of a browser. 

To solve this puzzle, we can do it by using the url to send and receive the client cookie authentication ticket. So its our client side JS code to perform all the http requests to the server by entering as a url parameter the authentication cookie and of course we need to change the ASP Net Cookie Authentication mechanism to get the cookie from URL and not from cookie section of Http.

In Startup.cs when we are setting up the authentication mechanism in our ASPNet-core app we are using a custom Cookie Manager.
services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
	.AddCookie(CookieAuthenticationDefaults.AuthenticationScheme, options =>
	{
		options.Cookie.Name = "OurApp_Cookie";
		options.LoginPath = "/Login/Index";
		options.LogoutPath = "/Login/Logout";
		options.AccessDeniedPath = "/Login/Index";
		options.Cookie.SecurePolicy = CookieSecurePolicy.SameAsRequest;
		options.CookieManager = new CustomCookieManager();
	});

This CustomCookieManager will implement interface ICookieManager and in the method GetRequestCookie we will read the cookie
from HttpContext.Request.Query 


