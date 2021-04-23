//Classe Pai
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
    return "Sou classe SUPER " + this.nome + " " + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: number
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    const result = super.getNomeCompleto();
    return "Sou sub-classe: " + result;
  }
}

const pessoa = new Pessoa("Wagner", "Duarte", 25, "000.000.000-00");
const aluno = new Aluno("Wagner", "Duarte", 25, "000.000.000-00", 10);

console.log(pessoa, pessoa.getNomeCompleto());
console.log(aluno, aluno.getNomeCompleto());
