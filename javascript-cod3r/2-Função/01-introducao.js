/**
 *  Função em JS é First-Class Object (Citizens)
 *  Higher-order function
 */

//Forma literal
function fun1() {}

//Armazenar em uma variável
const fun2 = function () {};

//Armazenar em um array
const array = [
  function (a, b) {
    return a + b;
  },
];
console.log("Array: " + array[0](3, 4));

//Aramazenar em um atributo de objeto
const objeto = {
  falar: function () {
    return "Olaa";
  },
};
console.log("Objeto: " + objeto.falar());

//Passando função como parametro
function run(fun) {
  fun(); //Invocando a função
}
run(function () {
  console.log("Executando...");
});

//Função pode retornar/conter uma função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}
soma(1, 3)(8);
