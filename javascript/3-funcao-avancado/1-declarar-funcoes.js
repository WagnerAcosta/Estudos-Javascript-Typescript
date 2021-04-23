//declaraçãode de função (Function hoisting)
//São elevadas para o topo
falaOi();
function falaOi() {
  console.log("Oie");
}

//First-class objects (Objetos de primeira classe)
//Function expression
const souUmDado = function () {
  console.log("Sou um dados");
};
souUmDado();

//Arrow function
const funcaoArrow = () => {
  console.log("Sou uma arrow function");
};
funcaoArrow();

//Função dentro de um objeto
const objeto = {
  falar() {
    console.log("Sou um metodo de um objeto");
  },
};
objeto.falar();
