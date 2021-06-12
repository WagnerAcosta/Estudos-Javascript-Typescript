//Arrow functions possuem this léxico, isso significa que herdam o contexto local de onde foi declarado.

//------------ Exemplo 1 -------------
function Pessoa() {
  this.idade = 0;

  setInterval(() => {
    this.idade++;
    console.log(this.idade);
  }, 1000);
}
// new Pessoa();

//------------ Exemplo 2 --------------
let comparaThis = function (param) {
  console.log(this === param);
};
comparaThis(global);

let comparaThisArrow = (param) => console.log(this === param);
comparaThisArrow(global);
