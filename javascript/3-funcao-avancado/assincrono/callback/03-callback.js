//**************Exemplo 1*****************/
const myFunc = (calbback) => {
    const nome = 'wagner'
    calbback(nome)
}
myFunc((n) => { console.log('Meu nome é', n) })

//**************Exemplo 2*****************/
let acum = 0
let array = [2, 10, 43]

const forEach = (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        const item = array[index]
        callback(item, index, array)
    }
}
const logMessage = (item, index, array) => {
    const message = `${index + 1}° : ${item} | [${array.join(', ')}]`
    console.log(message)
}

const sumArray = item => {
    return acum += item
}

forEach(array, logMessage)
forEach(array, sumArray)
console.log(acum)

/************** Exemplo 3 ******************/
let alunos = ['wagner', 'viviane']

function mostrar() {
    for (let i in alunos) {
        console.log(alunos[i])
    }
}
function adicionar(nome, callback) {
    alunos.push(nome)
    callback()
}

adicionar('Roberto', mostrar)
