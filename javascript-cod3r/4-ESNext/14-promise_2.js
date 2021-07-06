function esperarPor(tempo = 1000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Executando promises')
            resolve()
        }, tempo);
    })
}

esperarPor()
    .then(() => esperarPor(2000))
    .then(esperarPor)