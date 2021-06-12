/**
 * For clássico = Geralmente com iteráveis (array ou strings)
 * For IN = Retorna o índice ou chave (string, array ou object)
 * For OF = Retorna o valor em si (iteráveis, arrays ou strings)
 */

//Array
const nomes = ["wagner", "duarte", "acosta"];

for (let i of nomes) {
  console.log(`Array: ${i} ${nomes[i]}`);
}

//Não funciona com Objetos
// const pessoa = {
//   nome: "Wagner",
//   sobrenome: "Duarte",
//   idade: 25,
// };

// for (let i of pessoa) {
//   console.log(`Índice: ${i} Valor: ${pessoa[i]}`);
// }
