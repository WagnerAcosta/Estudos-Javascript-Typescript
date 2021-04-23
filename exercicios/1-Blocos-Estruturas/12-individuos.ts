function cadPeso(quantidade: number) {
  let peso: number[] = [];
  for (let i = 0; i < quantidade; i++) {
    peso[i] = Math.floor(Math.random() * 200 + 30);
  }
  return peso;
}

function menorPeso(peso: number[]) {
  let menor = peso[0];
  for (let i = 1; i < peso.length; i++) {
    if (menor > peso[i]) menor = peso[i];
    console.log(peso[i]);
  }
  return menor;

  //Facil
  // peso.sort((a, b) => a - b);
  // return peso[0];
}

let dados1 = cadPeso(10);
let peso = menorPeso(dados1);

console.log("O menor peso é: " + peso);
