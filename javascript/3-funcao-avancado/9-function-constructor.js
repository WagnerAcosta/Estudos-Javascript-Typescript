/**
 * Função construtora => objetos
 * Função fabrica => objetos
 * Construtora => Pessoa (new)
 */

function Cadastro(nome, cpf) {
  //Atributos e metodos Public
  this.nome = nome;
  this.cpf = cpf;

  //Atributos e metodos Private
  const ID = 120;
  const metodoInterno = () => {
    console.log(ID);
  };

  this.metodo = () => {
    console.log(`Sou um metodo ${this.nome}`);
  };
}
const cd1 = new Cadastro("Wagner", "00.000.000/0001-00");
cd1.metodo();
