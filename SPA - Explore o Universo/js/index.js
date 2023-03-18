import { Router } from "./router.js"

const router = new Router()
router.add('/', "/pages/home.html")
router.add('/universo', "/pages/universo.html")
router.add('/exploracao', "/pages/exploracao.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

const homeMenu = document.querySelector('#home')
const universoMenu = document.querySelector('#universo')
const exploracaoMenu = document.querySelector('#exploracao')
const body = document.querySelector('body')

homeMenu.addEventListener('click', () => {
    toggleMenuBold(homeMenu)
    body.style.backgroundImage = 'url(./assets/bg-home.png)'
})

universoMenu.addEventListener('click', () => {
    toggleMenuBold(universoMenu)
    body.style.backgroundImage = 'url(./assets/bg-universo.png)'
})

exploracaoMenu.addEventListener('click', () => {
    toggleMenuBold(exploracaoMenu)
    body.style.backgroundImage = 'url(./assets/bg-exploração.png)'
})

function toggleMenuBold(clickedMenu) {
    homeMenu.classList.remove('menuSelected')
    universo.classList.remove('menuSelected')
    exploracao.classList.remove('menuSelected')

    clickedMenu.classList.add('menuSelected')
}