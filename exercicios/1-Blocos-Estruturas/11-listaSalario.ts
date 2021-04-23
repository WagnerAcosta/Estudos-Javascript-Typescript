function cadastroSalario(quantidade: number) {
  let salario: number[] = [];
  for (let i = 0; i < quantidade; i++) {
    salario[i] = Math.floor(Math.random() * 4000 + 1000);
  }
  return salario;
}

function filtrarSalario(salario: number[]) {
  let media =
    salario.reduce((acumulador, valor) => acumulador + valor) / salario.length;
  let acimaMedia = salario.filter((v) => v >= media).map((v) => v);

  console.log("Media Salarial: R$" + media.toFixed(2));
  console.log("Acima da media: " + acimaMedia.sort());
}

let dados = cadastroSalario(15);
console.log("Salarios Cadastrados: " + dados);

filtrarSalario(dados);
