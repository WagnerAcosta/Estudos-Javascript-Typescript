//Formas de criar e passar objetos
const a = 0;
const b = 0;

const objeto1 = { a: a, b: b };
const objeto2 = { a, b };

console.log(objeto1, objeto2);

//Exemplo 2
const nome = "wagner";
const valor = 100;

const objeto3 = {};
objeto3[nome] = valor;

const objeto4 = { [nome]: valor };

console.log(objeto3, objeto4);

//Exemplo 3 metodos
const objeto5 = {
  f1: function () {}, //Antes
  f2() {}, //Nova forma reduzida
};

console.log(objeto5);
