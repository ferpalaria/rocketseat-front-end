// console.log("construir página")
// setTimeout(() => console.log("ler html"), 1000)
// console.log("mostrar")

import { Router } from "./router.js"

const router = new Router()
router.add('/', "/pages/home.html")
router.add('/about', "/pages/about.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()