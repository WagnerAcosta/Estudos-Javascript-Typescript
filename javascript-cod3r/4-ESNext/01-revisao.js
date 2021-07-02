//Destructuring
const [l, e, ...tras] = 'wagner'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3, 4, 5]
console.log(x, y)

const { nome, idade } = { nome: 'wagner', idade: 25 }
console.log(nome, idade);