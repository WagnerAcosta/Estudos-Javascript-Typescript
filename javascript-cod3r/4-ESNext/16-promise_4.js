let gerarNumeros = (min, max, tempo) => {
    if (min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo);
    })
}

let gerar6numeros = () => {
    return Promise.all([
        gerarNumeros(1, 60, 1000),
        gerarNumeros(1, 60, 3000),
        gerarNumeros(1, 60, 1500),
        gerarNumeros(1, 60, 500),
        gerarNumeros(1, 60, 1200),
        gerarNumeros(1, 60, 4000)
    ])
}

gerar6numeros()
    .then(console.log)