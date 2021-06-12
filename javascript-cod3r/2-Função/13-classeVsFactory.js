//******* Classe *******
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
  falar() {
    console.log(`Classe: meu nome é ${this.nome}`);
  }
}
const p1 = new Pessoa("Wagner");
p1.falar();

//******* Função factory *******
const pessoaFactory = (nome) => {
  return {
    falar: () => console.log(`Factory: meu nome é ${nome}`),
  };
};
const p2 = pessoaFactory("Manuel");
p2.falar();

//****** Função construtora *******
function pessoaConstru(nome) {
  this.nome = nome;
  this.falar = function () {
    console.log(`Construtora: meu nome é ${this.nome}`);
  };
}
const p3 = new pessoaConstru("Roberto");
p3.falar();
