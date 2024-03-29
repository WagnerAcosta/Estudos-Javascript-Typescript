/**
 * const: não tem ambito global, tem escopo de função, 
    tem escopo de bloco, e não pode ser reatibuido.
 * let: não tem ambito global, tem escopo de função,
    tem escopo de bloco e pode ser reatribuida.
 */

const verdadeira = true;
// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

let nome = "Luiz"; // criando
var nome2 = "Luiz"; // criando

if (verdadeira) {
  let nome = "Otávio"; // criando
  var nome2 = "Rogério"; // redeclarando

  if (verdadeira) {
    let nome = "Outra coisa";
    var nome2 = "Ronaldo"; // redeclarando
  }
}
console.log('1: ', nome, nome2);


function falaOi() {
  if (verdadeira) {
    let nome = "Luiz";
    var sobrenome = "Miranda";
  }
  console.log(sobrenome);
}
falaOi();

let sobrenome = "Miranda";
console.log(sobrenome);
