//Desestruturação de Objetos
const pessoa = {
  nome: "wagner",
  idade: 25,
  endereco: {
    rua: "Rua Manoel Machado Leonardo",
    numero: 171,
    bairro: "Florida I",
  },
};
const { nome, idade } = pessoa;
const {
  endereco: { rua, numero },
} = pessoa;

console.log("Exemplo Objeto: " + nome, idade, rua, numero);

//Desestruturação em Arrays
const [n1, , n3, , n5] = [1, 3, 4];
console.log("Exemplo Array: " + n1, n3);

//Desestruturação de função
function randObject({ min = 0, max = 100 }) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}
console.log("Exemplo Obejto: " + randObject({}));

function randArray([min = 0, max = 100]) {
  if (min > max) [min, max] = [max, min];
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}
console.log("Exemplo Array: ", randArray([]));
