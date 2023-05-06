/**Function declaration ou função de declaração*/
falaOi(); //hosting são elevadas para o topo
function falaOi() {
  console.log("Function declaration");
}


//First-class objects (Objetos de primeira classe) pode ser tratada como dados
//Function expression ou função de expressão
const souUmDado = function () {
  console.log("Function expression");
};


//Arrow function ES6 ou função de flecha
const funcaoArrow = () => {
  console.log("Arrow function");
};
funcaoArrow();


/**Função contrutora */
function Pessoa(nome) {
  this.nome = nome
}
const p1 = new Pessoa('Functions constructor')
console.log(p1)


/** Callbacks: são funções passadas como argumento */
function executa(funcao) {
  funcao();
}
executa(souUmDado);


//Função dentro de um objeto
const objeto = {
  //Método
  falar() { console.log("Sou um metodo de um objeto") },
};
objeto.falar();
