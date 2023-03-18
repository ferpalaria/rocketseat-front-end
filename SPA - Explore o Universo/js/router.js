export class Router {

    //Objeto vazio
    routes = {} 

    add(routeName, page) {
        this.routes[routeName] = [page]
    }

    route(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.handle()
    }

    handle() {
        // const pathname = window.location.pathname
        // ou, faça dessa forma abaixo:
        const { pathname } = window.location

        const route = this.routes[pathname] || this.routes[404]

        // buscar rota
        fetch(route)
            .then(data => data.text()) // função como parametro é um callback
            .then(html => {
                document.querySelector('#app').innerHTML = html
            })

        console.log(pathname)
    }
}

// export default new Router()