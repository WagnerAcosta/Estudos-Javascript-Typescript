/** Função construtora.
 * criando um novo objeto ({}).
 * definindo o construtor do objeto pessoa como Cadastro.
 * Sempre inicia uma nova instância
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
const pessoa = new Cadastro("Wagner", "00.000.000/0001-00");
pessoa.metodo();
console.log(pessoa)