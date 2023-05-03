/**array.reduce(callback, thisArgs)
 * callback(acumulator, curretValue, index, array)(valor inicial)
 
 * Pega todos os elementos e reduz a um único valor
 */

const numero = [1, 2, 3];

//Soma valores
const total = numero.reduce((acumulador, valor, indice, array) => {
  return (acumulador += valor);
});
console.log('soma: ', total);


//Retorna os pares
const pares = numero.reduce((acumulador, valor) => {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);
console.log('pares: ' + pares);


//Retorna o dobro
const dobro = numero.reduce((acumulador, valor) => {
  acumulador.push(valor * 2)
  return acumulador;
}, []);
console.log(dobro);


//-------------OBJETO------------
const pessoas = [
  { nome: "Wagner", idade: 25 },
  { nome: "Merigllyn", idade: 26 },
];

//Retorna maior idade
const maisVelha = pessoas.reduce((acumulador, valor) => {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});
console.log(maisVelha);
