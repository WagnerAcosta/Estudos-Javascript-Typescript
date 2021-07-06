const testeDeErro = (valor, chanceErro) => {
    return new Promise((resolve, reject) => {
        try {
            if (Math.random() < chanceErro) reject('Ocorreu um erro!')
            else resolve(valor)
        } catch (e) {
            reject(e)
        }
    })
}

testeDeErro('Testando...', 0.6)
    .then(console.log)
    .catch(console.log)