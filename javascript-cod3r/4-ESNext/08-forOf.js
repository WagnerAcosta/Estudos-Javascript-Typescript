for (let letra of 'wagner') {
    // console.log(letra)
}

const assuntosEcma = ['Set', 'Map', 'Promise']

for (let i in assuntosEcma) {
    // console.log(i)//Returna o index
}
for (let i of assuntosEcma) {
    // console.log(i)//Return valor
}

//********* exemplo 2 *********
const assuntoMap = new Map([
    ['Map', { abrodado: true }],
    ['Set', { abrodado: true }],
    ['Promise', { abrodado: false }]
])

for (let assunto of assuntoMap) {
    // console.log(assunto)
}

for (let chave of assuntoMap.keys()) {
    // console.log(chave)
}

for (let valor of assuntoMap.values()) {
    // console.log(valor);
}

for (let [chave, valor] of assuntoMap.entries()) {//Desestruturar
    console.log(chave, valor)
}