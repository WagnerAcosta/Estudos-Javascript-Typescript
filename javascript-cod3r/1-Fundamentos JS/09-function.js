/**um conjunto de instruções que executa uma tarefa ou calcula um valor. */

//Função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}
imprimirSoma(1, 4);

//Função com retorno
function soma(a = 0, b = 0) {
  return a + b;
}
console.log(soma(2, 9));

//Armazenando função em uma variavél
const multiplica = (a = 0, b = 1) => {
  a * b; //return implícito
};
console.log(multiplica(2, 5));
