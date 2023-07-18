
let primeiro = ""
let segundo = ""

let operacao = prompt("Escolha: \n" +
    "[1] Soma \n" +
    "[2] Subtração \n" +
    "[3] Multiplicação \n" +
    "[4] Divisão \n" +
    "[5] Resto \n" +
    "[6] Valida se Par \n" +
    "[7] São Iguais"
)

switch (operacao) {
    case "1":
        getValues()
        primeiro = Number(primeiro)
        segundo = Number(segundo)
        const soma = primeiro + segundo
        alert(soma)
    break;
    case "2":
        getValues()
        const sub = primeiro - nsegundo
        alert(sub)
    break;
    case "3":
        getValues()
        alert(primeiro * segundo)
    break;
    case "4":
        getValues()
        alert(primeiro / segundo)
    break;
    case "5":
        getValues()
        alert(primeiro % segundo)
    break;
    case "6":
        primeiro = Number(prompt("Digite o primeiro número"))
        alert(ehPar(primeiro))
    break;
    case "7":
        getValues()
        alert(saoIguais())
    break;
}

function getValues() {
    primeiro = Number(prompt("Digite o primeiro número"))
    segundo = Number(prompt("Digite o segundo número"))
    console.log(primeiro, segundo)
}

function ehPar(numero){
    if ((numero % 2) == 0 ) {
        return true;
    } else {
        return false;
    }
}

function saoIguais() {
    if (primeiro == segundo) {
        return true
    } else {
        return false
    }
}