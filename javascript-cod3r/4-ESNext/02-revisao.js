//Arrow function
const soma = (a, b) => a + b
console.log(soma(2, 5))

//Arrow function this
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//Parametros default
function log(n1 = 10) {
    console.log(n1)
}
log()

//Operador rest (Agrupa os valores)
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1, 6, 2))