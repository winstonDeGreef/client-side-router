export default class Router {
    constructor(containerEl, routes, options={autoRouteAEl: true, "404route": "404", stackLinks: false}) {
        this.containerEl = containerEl
        this.routes = routes
        this.options = options
        this.curentRoute = window.location.href
        
        window.addEventListener("click", event => this.linkHandeler(event))
        window.addEventListener("popstate", () => {
            this._loadRoute();
            this.curentRoute = window.location.href
        })
        this._loadRoute()
    }

    changeRoute(newRoute) {
        if (newRoute === this.curentRoute & !this.stackLinks) return
        this.curentRoute = newRoute
        window.history.pushState({}, "", newRoute)
        this._loadRoute()
    }

    _loadRoute() {
        let routeData = this.routes[window.location.pathname] ?? this.routes[this.options["404route"]]
        switch (typeof routeData) {
            case "string":
                this.containerEl.innerHTML = routeData
                break
            case "object":
                this.containerEl.innerHTML = ""
                this.containerEl.append(routeData)
                break
            case "function":
                this.containerEl.innerHTML = ""
                routeData(this.containerEl)
        }
    }

    linkHandeler(e) {
        if (this.options.autoRouteAEl) {
            if (event.target.tagName === "A") {
                if (event.target.origin !== window.location.origin) {
                    //normall redirect
                    return
                }
                event.preventDefault()
                this.changeRoute(event.target.href)
            }
        }
    }
}
