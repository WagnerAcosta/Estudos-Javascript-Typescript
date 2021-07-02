//*****************Exemplo 1*******************
function soma(a, b, callback) {
  const result = a + b;
  callback(result); //Invocando função
}
function imprimir(valor) {
  console.log("Exemplo 1:", valor);
}
const result = soma(10, 32, imprimir);

//*****************Exemplo 2*******************
function map(array, callback) {
  const arrResult = [];
  for (let i = 0; i < array.length; i++) {
    arrResult.push(callback(array[i]));
  }
  return arrResult;
}
function dobro(valor) {
  return valor * 2;
}
const valorArray = [1, 2, 3, 4, 5];
const novoArray = map(valorArray, dobro);
console.log("Exemplo 2:", novoArray);

//******************Exemplo 3 *********************
const valor = [10, 21, 32, 40.1]
function newFilter(array, callback) {
  let arrayPar = []
  for (let index of array) {
    if (callback(index)) arrayPar.push(index)
  }
  return arrayPar
}

function numberPar(valor) {
  if (valor % 2 === 0) return valor
};

const resultado = newFilter(valor, numberPar)
console.log("Exemplo 3", resultado)
