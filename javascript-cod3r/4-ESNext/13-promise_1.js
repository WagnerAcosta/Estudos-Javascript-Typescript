const primeiraElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toUpperCase()

new Promise(resolve => resolve(['wagner', 'viviane']))
    .then(primeiraElemento)
    .then(primeiraElemento)
    .then(letraMinuscula)
    .then(console.log)