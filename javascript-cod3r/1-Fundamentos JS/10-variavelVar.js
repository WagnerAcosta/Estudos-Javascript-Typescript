//VAR tem escopo global e de função
{
  {
    {
      var nome = "Wagner";
    }
  }
}
console.log('nome1: ', nome, '\n');


function imprimir() {
  var sobrenome = "Duarte"; //Escopo somente na função
}
// console.log(sobrenome);


//-------Var em loop--------
for (var i = 0; i < 3; i++) {
  console.log('var1: ', i);
}
console.log("i: " + i); //Pode ser acessado de fora

var dados = [];
for (var i = 0; i < 3; i++) {
  dados.push(function () {
    console.log('var2: ', i);
  });
}
dados[0]();
dados[2]();
