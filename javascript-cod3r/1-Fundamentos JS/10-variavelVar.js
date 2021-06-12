//VAR tem escopo global e de função

{
  {
    {
      var nome = "Wagner";
    }
  }
}
console.log(nome);

function imprimir() {
  var sobrenome = "Duarte"; //Escopo somente na função
}
// console.log(sobrenome);

//-------Var em loop--------
for (var i = 0; i < 3; i++) {
  console.log(i);
}
console.log("i= " + i);

var dados = [];
for (var i = 0; i < 3; i++) {
  dados.push(function () {
    console.log(i);
  });
}
dados[0]();
dados[2]();
