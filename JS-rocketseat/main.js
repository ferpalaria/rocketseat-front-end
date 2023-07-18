let randomNumber = Math.round(Math.random() * 10)
let lastNumber = 0
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

const messageField = document.querySelector('#message')
const inputField = document.querySelector('#inputNumber')

let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', pressEnter)

function pressEnter(e) {
    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}

function handleTryClick(event) {
    event.preventDefault()  // para não tentar enviar os dados do form (pq o botão está dentro do form)

    messageField.classList.add('hide')

    const inputNumber = inputField.value

    if (lastNumber != inputNumber) {

        if (inputNumber > 10 || inputNumber < 0) {
            printWarningMessage('O número precisa ser de 0 a 10, tente novamente')
        }

        console.log(Number(inputNumber))
        console.log(randomNumber)

        if (Number(inputNumber) == randomNumber) {
            toggleScreen()
            printResultado(xAttempts)
        } else {
            lastNumber = inputNumber
        }

        xAttempts++
    }
}

function printWarningMessage(message) {
    messageField.classList.remove('hide')
    messageField.querySelector("p").innerHTML = message
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
    randomNumber = Math.round(Math.random() * 10)
}

function printResultado(xAttempts) {
    screen2.querySelector("h2").innerHTML = `Acertou em ${xAttempts} tentativas`
}

