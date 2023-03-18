# SPA

SPA - Singles Page Application 

## Structure - Desestruturação 
````
const pathname = windown.location.pathname
````
o nome da propriedade do location é a mesma da minha constante, eu posso simplificar da seguinte forma
`````
const { pathname } = windown.location
`````
`````
const { pathname, host, port, href } = windown.location
`````

## Salvado href no history 
````
windown.history.pushState({}, "", event.target.href)
````
- target: de onde veio o event
- event: veio junto com a página 
- href nome de qualquer propriedade do elemento de origem que chamou a função que vai conter esse código

## Assincrono 
- SetInterval 

Executa de 1 em 1 segundo 
`````
setInterval(() => console.log('executei'), 1000)
`````

- SetTimeout

Espera o tempo definido
````
setTimeout(() => console.log('executei'), 1000)
````

- Fetch 
"Prometi que vou buscar"
````
route = "/page/contact.html"

fetch(route)
.then(data => data.text())
.then(html => console.log())
````
