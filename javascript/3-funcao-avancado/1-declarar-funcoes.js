//declaração de função literal
falaOi(); //hosting são elevadas para o topo
function falaOi() {
  console.log("Função literal");
}

//First-class objects (Objetos de primeira classe) pode ser tratada como dados
//Function expression
const souUmDado = function () {
  console.log("Função como dados");
};
//Função como parametro
function executa(funcao) {
  funcao();
}
executa(souUmDado);

//Arrow function ES16
const funcaoArrow = () => {
  console.log("Sou uma arrow function");
};
funcaoArrow();

//Função dentro de um objeto
const objeto = {
  //Método
  falar() {
    console.log("Sou um metodo de um objeto");
  },
};
objeto.falar();
