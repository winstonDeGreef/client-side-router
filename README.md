# client-side-router
A vanilla js client side router

## using
import the `Router` class.<br>
```import Router from "./router.js"```<br>
and create a new router class. Note that some things will brake if you create multiple instances.<br>
The first argument is the container element to change when moving to a different url.<br>
The second url is a map of all the possible urls to the html. (These start with a `/`.) This can be a string or a html element that will set the html of the container element. It can also be a function, this function gets called with the container Element as it's argument.<br>
The thrid argument is a settings object with the settings:<br>
&nbsp;&nbsp; 1. `autoRouteAnchorElements`: automatically use the router when clicking on anchor elements. (only if the url has the same origin as the page.) default: true.<br>
&nbsp;&nbsp; 2. `"404route"`: When navigating to a route that isn't in the `routes` object, it will render `routes[settings["404route"]]`. default: "404".<br>
&nbsp;&nbsp; 3. `stackLinks`: when a user clicks on a link while already being on that route, rerender the page.
