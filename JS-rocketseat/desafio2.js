const estudantes = [{
    nome: "Fernanda",
    primeiraNota: 8,
    segundaNota: 9
},
{
    nome: "Carlos",
    primeiraNota: 5,
    segundaNota: 3
},
{
    nome: "Beatriz",
    primeiraNota: 6,
    segundaNota: 10
},
{
    nome: "Julian",
    primeiraNota: 10,
    segundaNota: 5
}
]

function media() {
    for (let estudante of estudantes) {
        let media = (estudante.primeiraNota + estudante.segundaNota) / 2
        alert(`A média do(a) aluno(a) ${estudante.nome} é: ${media}\n` + 
        aprovacao(media, estudante.nome))
        
    }
}

media()

function aprovacao(media, nome) {
    if (media >= 7) {
        return `Parabéns, ${nome} você foi aprovado!!`
    } else { 
        return `Não foi dessa vez ${nome}! Tente novamente`
    }
}