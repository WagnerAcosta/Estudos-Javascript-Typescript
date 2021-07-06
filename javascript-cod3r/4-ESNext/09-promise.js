function falar(tempo, mensagem) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(mensagem)
        }, tempo);
    })
}

falar(2000, 'Olá tudo bem')
    .then(frase => console.log(frase, '?'))