function notasInstituicao(notas) {
  for (let i = 0; i < notas.length; i++) {
    let diferenca = 5 - (notas[i] % 5);

    if (notas[i] <= 37) console.log(notas[i], "Reprovado");
    else if (notas[i] % 5 > 2) {
      notas[i] += diferenca;
      console.log(notas[i], "Aprovado");
    } else {
      console.log(notas[i], "Aprovado");
    }
  }
}

function gerarNotas() {
  let notas = [];
  for (let i = 0; i < 5; i++) {
    notas.push(Math.floor(Math.random() * 100));
  }
  return notas;
}

notasInstituicao(gerarNotas());
