export class Pessoa {
  constructor(public nome: string, public idade: number, public cpf: string) {}

  static falaAlgo() {
    console.log("Saudações Terraqueos");
  }

  static craiCadastro(nome: string, idade: number) {
    return new Pessoa(nome, idade, "000.000.000-00");
  }
}

const pessoa = new Pessoa("Wagner", 25, "000.000.000-00");
console.log(pessoa);

Pessoa.falaAlgo(); //Pode ser chamado sem instanciar a classe
