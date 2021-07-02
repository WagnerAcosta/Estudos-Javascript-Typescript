//*************** Exemplo 1 ****************
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return "Nova String"
}
const aluno = 'Guilherme'
const situacao = 'Aprovado'
console.log(tag`${aluno} está ${situacao}`)

//****************** Exemplo 2 ******************/
function real(parte, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(parte[indice], valor)
    })
    return resultado.join('')
}
const preco = 29.99
const precoParcela = 12
console.log(real`1x de ${preco} ou 3x de ${precoParcela}.`)