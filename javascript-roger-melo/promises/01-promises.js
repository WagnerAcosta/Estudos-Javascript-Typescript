/**
 * Promise é um objeto que representa o sucesso ou a falha de uma operação assíncrona
 */
const fetch = require('node-fetch')

const url = 'https://dog.ceo/api/breeds/image/random'

const validateHTTPStatus = dogData => {
    if (!dogData.ok) throw new Error(`HTTP error, status ${dogData.status}`)
    return dogData.json()
}

fetch(url)
    .then(validateHTTPStatus)
    .then(({ message }) => console.log(message))
    .catch(error => console.log(error))

/****************Exemplo 2************************/

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        //console.log('\nResponse', response)
        return response.json()
    })
    .then(users => console.log(users))//Exibe o return
    .catch(error => console.log(error))