# Project Title

## About <a name = "about"></a>

Write about 1-2 paragraphs describing the purpose of your project.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo.

## Conceitos da aula <a name = "usage"></a>

- display: inline <strong>não</strong> recebe propriedade width. Já inline block, sim
- before e after

canIuse.com - validar se a propriedade precisa ser usada no navegador, por ex, appearence, -webkit

encoder 
https://yoksel.github.io/url-encoder/

``` html
<!-- Label:for tem que ser o mesmo de input:id pela acessibilidade, pra saber identificar qual label pertence a qual input -->
<label for="usuario">Usuário:</label>
<input type="text" name="usuario" id="usuario">
<label for="senha">Senha:</label>
<input type="password" name="senha" id="senha">
<label for="idade">Idade:</label>
<input type="number" name="idade" id="idade">

<label for="depoimento">Depoimento:</label>
<!-- atributo Cols e Rows são configurados pelo css -->
<textarea name="depoimento" id="depoimento"></textarea>
```

``` html
<form action="/search" method="POST">
  <input type="text" name="q" />
  <input type="hidden" name="sxsrf" value="APq-WBv8ROgdfkUD" />
  <input type="submit" value="Pesquisar" />
</form>

```