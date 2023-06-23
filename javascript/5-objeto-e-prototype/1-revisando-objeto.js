//Construtor literal
const pessoa1 = {
  username: "Maria",
  password: "1234",
  idade: 25,
  falarNome: function () {
    return `${this.username} está falando seu nome.`;
  },
  getDataNascimento: () => {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - pessoa1.idade;
  },
};
// const chave = "username";
// console.log(cadastro1.username); //cadastro1
// console.log(cadastro1["password"]); //cad1
// console.log(cadastro1[chave]); //cadastro1
console.log('leteral: ' + pessoa1)
console.log(pessoa1.falarNome());
console.log(pessoa1.getDataNascimento() + '\n');



//Construtor de objeto
const cadastro2 = new Object();
cadastro2.username = "cadastro2"; //Adiciona
cadastro2.password = "cad2";

delete cadastro2.username; //Excluir

console.log('Constructor: ' + cadastro2);



//Factory functions
function criarObjeto(marca, modelo) {
  return {
    marca,
    modelo,
    get mostrar() {
      return `${marca} ${modelo}`;
    },
  };
}
const obj = criarObjeto("samsung", "j4");
console.log('Factory: ' + obj)
console.log(obj.mostrar);



//Construtor functions
function Objeto(marca, modelo) {
  this.marca = marca
  this.modelo = modelo
  Object.freeze(this); //congela objeto
}
const ojt1 = new Objeto("iphone", "i10");
delete ojt1.marca; //Não funciona por causa do congelamento
console.log('Functions construtor: ' + ojt1);
