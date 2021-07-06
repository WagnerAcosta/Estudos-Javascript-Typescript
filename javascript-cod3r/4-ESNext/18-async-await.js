function esperarPor(tempo = 2000) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo)
    })
}

async function retornarValorRapido() {
    return 20 //funciona como resolve
}

// esperarPor(3000)
//     .then(() => console.log('Executando...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando...'))

function valor() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(10), 4000);
    })
}

//Sempre deve ser utilizada dentro de uma função
async function executar() {
    let soma1 = await valor()
    let soma2 = await retornarValorRapido()

    await esperarPor(2000)
    console.log('Async/Await 1...', soma1++)

    await esperarPor(3000)
    console.log('Async/Await 2...', soma2++)

    await esperarPor(3000)
    console.log('Async/Await 3...', soma1 + soma2)
}

executar()