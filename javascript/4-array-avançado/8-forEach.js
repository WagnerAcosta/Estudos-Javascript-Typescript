//foreach(valor, indice, array)
//ForEach somente utilizado em array

const num1 = [10, 20, 30];
let total = 0;
num1.forEach((valor, indice, array) => {
  total += valor;
});

console.log("valor total " + total);
