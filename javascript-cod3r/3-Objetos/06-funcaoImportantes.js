const pessoa = {
  nome: "Wagner",
  idade: 25,
  peso: 58,
  end: { rua: "jose maria", num: 171 },
};

console.log(Object.keys(pessoa)); //Busca todas as chaves
console.log(Object.values(pessoa)); //Busca todos os valores
console.log(Object.entries(pessoa)); //Array

//Percorrendo o Array entries
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

//Define uma nova propriedade ou modifica uma existente no objeto, retornando o objeto.
Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true,
  writable: false,
  value: "27/06/2021",
});
console.log(Object.keys(pessoa));

//É usado para copiar os valores de todas as propriedades próprias enumeráveis de um ou mais
// objetos de origem para um objeto destino. Este método irá retornar o objeto destino.
const c1 = { a: "Casa 1" };
const c2 = { b: "Casa 2" };
const c3 = { c: "Casa 3", b: "Nova casa" };
const objeto = Object.assign(c1, c2, c3);
console.log(objeto);

//Congela o objeto
Object.freeze(objeto);
objeto.a = "wagner"; //Não altera
console.log(objeto);
