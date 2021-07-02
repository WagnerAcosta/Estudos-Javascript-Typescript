function soma(a, b) {
  return a + b; //Retorna o valor
}
soma(10, 20);

function soma2(a, b) {
  console.log(a + b); //Só exibi o valor
}
soma2(2, 7);

//Funcão para criar objeto.
function criarObjeto(nome, sobrenome) {
  return { nome, sobrenome };
}
const p1 = criarObjeto("Wagner", "Duarte"); //Usei uma função
const p2 = { nome: "Meri", sobrenome: "acosta" }; //fiz manual

console.log(p1);
console.log(p2);

//Função dentro de função
function criaMultiplicador(multiplicador) {
  return function (numero) {
    return numero * multiplicador;
  };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2), triplica(2), quadriplica(2));
