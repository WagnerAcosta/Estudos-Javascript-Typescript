export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ) {}

  public getIdade(): number {
    return this.idade;
  }

  public getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return "Metodo do Aluno: " + this.nome + " " + this.sobrenome;
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return "Metodo de Cliente " + this.nome + " " + this.sobrenome;
  }
}

const pessoa = new Pessoa("Wagner", "Duarte", 25, "000.000.000-00");
const aluno = new Aluno("Wagner", "Duarte", 25, "000.000.000-00");
const cliente = new Cliente("Wagner", "Duarte", 25, "000.000.000-00");

console.log(pessoa, pessoa.getNomeCompleto());
console.log(aluno, aluno.getNomeCompleto());
console.log(cliente, cliente.getNomeCompleto());
