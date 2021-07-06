const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

let nomes = []

//Exemplo 1
getTurma('A')
    .then(alunos => {
        nomes = nomes.concat(alunos.map(a => { `A: ${a.nomes}` }))

        getTurma('B')
            .then(alunos => {
                nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))

                getTurma('C')
                    .then(alunos => {
                        nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
                        // console.log(nomes)
                    })
            })
    }).catch(e => console.error(e))

//Exemplo 2
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log((nomes)))

getTurma('D').catch(e => console.error(e.message))