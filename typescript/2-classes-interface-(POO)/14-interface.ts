//Interface está relacionado o POO
interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto; //Pode usar assim

interface TipoPessoa2 extends TipoPessoa {}

export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}
//Exemplo em Objeto
const pessoaObj: TipoPessoa = {
  nome: "Luiz",
  sobrenome: "Agora tá ok",
  nomeCompleto() {
    return this.nome + " " + this.sobrenome;
  },
};

const pessoa = new Pessoa("Luiz", "Miranda");
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
