type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto: () => string;
};

//Tipo utiliza IMPLEMENTS
export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

const pessoa = new Pessoa("Luiz", "Miranda");
console.log(pessoa.nomeCompleto());
