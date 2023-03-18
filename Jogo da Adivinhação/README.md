<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="Project logo"></a>
</p>

<h3 align="center">JS intro</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Anotações aula de introdução ao JS
  <br> 
</p>

## 📝 Table of Contents

- [Desvantagem do var](#getting_started)
- [Pra relembrar](#relembrar)

## 🏁 Hoisting

<a name = "getting_started"></a>

<strong>var</strong> e <strong>let</strong> fazem basicamente a mesma coisa, porém o <strong>var</strong> temos uma desvantagem chamada <strong>HOISTING</strong>, ou seja, o <strong>var é global</strong> e poderá funcionar fora de um escopo de bloco. A execução se da da seguinte forma:

```
console.log('valor de x: ', x) 

\\ Output: Uncaught ReferenceError: x is not defined
```

```
console.log('valor de x: ', x)

{ 
  var x = 0 
} 

\\ Output: undefined
```

Ou seja, no segundo exemplo, o x existe, apesar que não deveria, porque ele ainda não foi criado quando o <code>console.log()</code> foi chamado. Isso se dá pela criação do var ser jogado pro topo da execução

<img src="https://www.tutorialsteacher.com/Content/images/js/hoisting.png">

Já o let e const são <string>locais</strong> ou seja. respeitam o escopo de bloco

Isso também pode acontecer com função, por ex, a função está sendo chamada antes mesmo de ser "criada"

```
sayMyName()

function sayMyName() {
  console.log('Fernanda')
}

\\ Output: Fernanda
```

<strong>Poorem</strong>, se tinha uma constante recebendo essa função anônima

```
sayMyName()

canst sayMyName = function() {
  console.log('Fernanda')
}

\\ Output: Uncaught ReferenceError: Cannot access 'sayMyName' before inicialization
```

## ✨ Pra relembrar

<a name = "relembrar"></a>

<details>
<summary>💲 Interpolação </summary>

Sintaxe pra relembrar 

```
console.log(' ${pessoa.nome} estuda ${pessoa.curso} ')
```

</details>

<details>
<summary>{[]} Objeto e Array </summary>

- [ Array, Array ] - 
  <span style="color: pink">colchetes</span>
- { tipo: objeto, objeto: true } -
  <span style="color: green">chaves</span>
  
  </details>

<details>
<summary>🕵️‍♀️ Como saber o tipo? </summary>

<code>
console.log( <span style="color: pink">typeof</span> variavel )
</code>
</details>

<details>
<summary>🚜 Função construtora </summary>

```
function Person(name) {
  this.name = name
  this.walk= function() {
    return this.name + " está andando"
  }
}

const mayk = new Person ("Mayk")
```

</details>

<details>
<summary>[ ] executar função de dentro de um array</summary>

```
const array = [
  "a",
  {"hey", "hou"},
  function() {
    return "alo"
  }
]

console.log(array[2]())
```

</details>

<details>
<summary>➡️ String pra Array</summary>

```
console.log(Array.from("Fernanda"))
```

</details>

<details>
<summary>🔋 Manipulando Array</summary>

- Inserir no final do array
  <code><br>techs.push("html")</code>
- Remover do final do array 
  <code><br>techs.pop()</code>
- Inserir no começo do array
  <code><br>techs.unshift("css")</code>
- Remover do começo do array
  <code><br>techs.shift()</code>
- Dividir o array de 4 posições ao meio
  <code><br>["css", "html", "react", "js"].slice(2,4)</code>
- remover um elemento especifico pelo nome
  <code><br>let index = techs.indexOf("css")<br>
  techs.splice(index, 1)</code>
  
  </details>

<details>
<summary>↪️ Função auto executável</summary>

```
(function() {
  console.log('hey')
})()
```

</details>

<details>
<summary>🏃‍♀️ Percorrer Arrays</summary>

```
for(let index of techs){
  console.log(index)
}
```

</details>
<details>
<summary>👀 Percorrer Objeto</summary>

```
for(let property in techs){
  console.log(property)
  console.log(tech[property])
}
```

</details>

<details>
<summary>⁉️ alerta com pergunta na tela</summary>

```
let nome = prompt("Qual o seu nome?")
```

</details>

<details>
<summary>⁉️ arredondtar número decimal</summary>

```
Math.round(22.454) => 22.4 (mais próximo)
Math.floor(22.454) => 22   (pra baixo)
Math.ceil(1.1) == 2        (pra cima)
```

</details>

Apertar Enter em algum input vai submeter o botao, pq eles estão dentro do FORM
