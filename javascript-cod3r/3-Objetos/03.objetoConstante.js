//pessoa -> endereço -> {...}
const objeto = { nome: "wagner" };
objeto.nome = "Ana"; //Atributo pode ser alterado
console.log(objeto);

//pessoa -> novo endereço -> {...} //Não é permitido
// objeto = { nome: "Novo" };
// console.log(objeto);

//Congelando Objetos
Object.freeze(objeto);

objeto.nome = "Estou congelado";
objeto.valor = "1200";
delete objeto.nome;

console.log(objeto);
