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

      resolve(msg.toUpperCase() + tempo + " - Passei por aqui!"); //Passado no then()
      return;
    }, tempo);
  });
}

async function login() {
  try {
    const fase1 = await requisicao(`Frase 1 `, rand(1, 3));
    console.log(fase1);

    const fase2 = await requisicao("Frase 2 ", rand(1, 3));
    console.log(fase2);

    const fase3 = await requisicao(`Frase 3 `, rand(1, 3));
    console.log(fase3);
  } catch (error) {
    console.log(error);
  }
}
login();
//pending -> pendente
//fullfilled-> resolvida
//rejected -> rejeitada
