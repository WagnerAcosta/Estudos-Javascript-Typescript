//Operador Rest (Juntar)
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1, 6, 2))

//Operador Spread (Espalhar) 
const funcionario = { nome: 'Wagner', salario: 1200 }
const clone = { ...funcionario, ativo: true }
console.log(clone)

const grupoA = ['Viviane', 'Maria', 'João']
const novoArray = [...grupoA, 'Roberto']
console.log(novoArray)