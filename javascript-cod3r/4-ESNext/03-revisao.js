//ES8: Object.values / Object.entries
const obj = {
    a: 2, b: 5, c: 10
}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhoris na notação literal
const nome = 'wagner'
const pessoa = {
    nome, idade: 20,
    print() { return 'Olá wagner' }
}
console.log(pessoa)

//Classes
class Animal { }
class Cachorro extends Animal {
    print() { return 'Sou um cachorro' }
}
console.log(new Cachorro().print())