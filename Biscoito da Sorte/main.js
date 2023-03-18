const fortuneCookie = document.querySelector("#cookie")
const anotherCookieBtn = document.querySelector("#secondary-screen button")
const mainScreen = document.querySelector("#main-screen")
const secundaryScreen = document.querySelector("#secondary-screen")
const messageParagraph = document.querySelector("#secondary-screen p")
let randomPosition = 0

const messages = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu",
    "É em meio a dificuldade que se encontra a oportunidade",
    "Mesmo que algo pareça difícil, nunca desista antes de tentar",
    "É genial celebrar a vitória, contudo é mais significativo aprender com as lições da derrota",
    "Já pensou que você já superou muitas dificuldades até aqui?",
    "O êxito é a somatória dos pequenos esforços repetidos diariamente",
    "Não é uma vida ruim, é apenas um dia ruim, lembre-se disso"
]

fortuneCookie.addEventListener('click', showMessage)
anotherCookieBtn.addEventListener('click', toggleScreen)

function showMessage() {
    toggleScreen()
    randomMessage()
}

function toggleScreen() {
    mainScreen.classList.toggle('hide')
    secundaryScreen.classList.toggle('hide')
}

function randomMessage() {
    randomPosition = Math.round(Math.random() * 6)
    messageParagraph.innerHTML = messages[randomPosition]
}