/**
 * Não aceita repetição / Não indexada
 */

const times = new Set()
times.add('Vasco')
times.add('São paulo')
times.add('Cruzeiro')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Vasco')

const nomes = ['wagner', 'viviane', 'eneir', 'paulo', 'viviane']
const nomeSet = new Set(nomes)
console.log(nomeSet)