/**
 * For clássico = Geralmente com iteráveis (array ou strings)
 * For IN = Retorna o índice ou chave (string, array ou object)
 * For OF = Retorna o valor em si (iteráveis, arrays ou strings)
 */

const frutas = ["Pera", "Maça", "Banana", "Laranja"];

//Array
for (let i in frutas) {
  console.log(`Array: Índice:${i} Valor:${frutas[i]}`);
}

//Objeto
const pessoa = {
  nome: "Wagner",
  sobrenome: "Duarte",
  idade: 25,
};

for (let i in pessoa) {
  console.log(`Objeto: índice: ${i} Valor: ${pessoa[i]}`);
}
