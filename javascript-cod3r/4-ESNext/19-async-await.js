function megaSena(min, max, repete) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fat = max - min + 1
        const aleatorio = parseInt(Math.random() * fat) + min

        if (repete.includes(aleatorio)) reject('Número repetido!')
        else resolve(aleatorio)
    })
}

async function gerarMegaSena(qtdeNumeros, tentativas = 0) {
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await megaSena(1, 60, numeros))
        }
        return numeros
    } catch (error) {
        if (tentativas > 3)
            throw 'Não deu!'
        else
            return gerarMegaSena(qtdeNumeros, tentativas += 1)

    }
}

gerarMegaSena(6)
    .then(v => v.sort((a, b) => a - b))
    .then(console.log)
    .catch(console.log)