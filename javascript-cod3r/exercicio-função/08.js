function meuDesempenho(pontos) {
  let jogos = pontos.split(", ");

  for (let i = 0; i < jogos.length; i++) {
    jogos[i] = parseInt(jogos[i]);
  }

  let recorde = 0;
  let index = 0;

  let melhorJogo = jogos[0];
  let piorJogo = jogos[0];

  for (let i = 1; i < jogos.length; i++) {
    console.log("Pior: " + piorJogo, jogos[i]);
    if (jogos[i] > melhorJogo) {
      melhorJogo = jogos[i];
      recorde++;
    } else if (piorJogo > jogos[i]) {
      piorJogo = jogos[i];
      index = i + 1;
    }
  }
  return [recorde, index];
}

let jogos = "30, 40, 20, 4, 51, 25, 1, 42, 38, 0, 56, 70";
console.log(meuDesempenho(jogos));
