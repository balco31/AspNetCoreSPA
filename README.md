AspNet Cookie Authentication without cookie

I needed to create an aspnet-core Application with MVC which will be able to react as a SPA (single page application) without the usage of an existent SPA JS framework such as Angular. This Project in order to fulfill its requirements has performed some customizations in Cookies Based default authentication mechanism of ASP.NETCore and default Session Management. So Yes its a pure MVC .net Core application as we request from web server to serve us all the partial views and keep also the related user session but on the other hand we have pure support of a Single Page application Based on Kendo UI (eg.kendo Router for client side routing). One page is downloaded once and web client perform routing through partial views. 

In the projects' Wiki you will see more details on these issues.



