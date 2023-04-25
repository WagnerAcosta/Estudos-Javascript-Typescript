//Let acessado somente no bloco que foi declarado
let numero = 1;
{
  let numero = 3;
  console.log("Dentro: " + numero);
}
console.log("Fora: " + numero);


//------- Let em loop -------
for (let i = 0; i < 3; i++) {
  console.log('let1: ', i);
}
// console.log(i); i é um escopo de bloco


const dados = [];
for (let i = 0; i < 5; i++) {
  dados.push(() => console.log('let2: ', i));
}
dados[0]();
dados[3]();
