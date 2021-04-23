function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function requisicao(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Não é uma string");
        return; //Para de executar após o erro.
      }

      resolve(msg.toUpperCase() + tempo + " - Passei na Promise!"); //Passado no then()
      return;
    }, tempo);
  });
}

const promises = [
  //   "Primeiro valor",
  requisicao(`Promise 1 `, rand(1, 3)),
  requisicao(`Promise 2 `, rand(1, 3)),
  requisicao(`Promise 3 `, rand(1, 3)),
  //   requisicao(1000, rand(1, 3)),
  //   "Outro valor",
];

//Resolve todas antes de me devolver
//Só devolve se não apresentar nenhum erro
Promise.all(promises)
  .then((valor) => console.log(valor))
  .catch((e) => console.log(e));

//Entrega o primeiro que foi resolvido
Promise.race(promises)
  .then((valor) => console.log(valor))
  .catch((e) => console.log(e));

//Promise.resolve Promise.reject
function baixaPagina() {
  const emCache = false;

  if (emCache) {
    return Promise.resolve("Página em cache"); //Se resolve já devolve
  } else {
    return requisicao("Baixei a página em ", rand(1, 3));
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log("ERRO", e));
