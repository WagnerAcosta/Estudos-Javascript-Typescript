/**array.map(callback, thisArgs)
 * callback(item, index, array)
   
 * Acessa todos os elementos e realiza modificações
 * Cria um novo array e não modifica array original
 */

// map(valor, indice, array)
//               0  1   2   3  4 .....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map((valor) => valor * 2);
console.log(numerosEmDobro);


// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto (id)
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
];
const nomes = pessoas.map((obj) => obj.nome);
console.log(nomes);


const idades = pessoas.map((obj) => ({ idade: obj.idade }));
console.log(idades);


const comIds = pessoas.map((value, indice) => {
  const newObj = { ...value }; //Criando novo Objeto
  newObj.id = indice;
  return newObj;
});
console.log(comIds);
