const produto = { nome: "Caneca", valor: 1.5 };
const caneca = { ...produto, material: "porcelanato" };

caneca.nome = "Caneca";
caneca.valor = 2.5;

console.log(produto);
console.log(caneca);
