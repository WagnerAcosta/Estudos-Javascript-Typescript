//Construtor literal
const cadastro1 = {
  username: "cadastro1",
  password: "cad1",
  datCad: 25,
  falarNome: () => {
    return `${cadastro1.username} está falando seu nome.`;
  },
  getDataNascimento: () => {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - cadastro1.datCad;
  },
};
// const chave = "username";
// console.log(cadastro1.username); //cadastro1
// console.log(cadastro1["password"]); //cad1
// console.log(cadastro1[chave]); //cadastro1
console.log(cadastro1.falarNome());
console.log(cadastro1.getDataNascimento());

//Construtor de objeto
const cadastro2 = new Object();
cadastro2.username = "cadastro2"; //Adiciona
cadastro2.password = "cad2";

delete cadastro2.username; //Excluir

console.log(cadastro2);

//Factory functions para a construção de objetos
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
console.log(obj.mostrar);

//Construtor functions para a construção de objetos
//Precisa nome Maiusculo
function Objeto(marca, modelo) {
  (this.marca = marca), (this.modelo = modelo);
  Object.freeze(this); //congela objeto
}
const ojt1 = new Objeto("iphone", "i10");
delete ojt1.marca; //Não funciona por causa do congelamento
console.log(ojt1);
