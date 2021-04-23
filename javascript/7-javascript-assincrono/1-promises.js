function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function requisicao(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("Não é uma string");

    setTimeout(() => {
      resolve(msg); //Passado no then()
    }, tempo);
  });
}

requisicao(`Requisição 1: ${rand(1, 3)}`)
  .then((resposta) => {
    console.log(resposta);
    return requisicao(`Requisição 2:  ${rand(1, 3)}`);
  })
  .then((resposta) => {
    console.log(resposta);
    return requisicao(`Requisição 3: ${rand(1, 3)}`);
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((e) => console.log("Erro:", e));
