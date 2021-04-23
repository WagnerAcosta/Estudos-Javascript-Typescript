export class Pessoa {
  constructor(
    public nome: string, //Pode ser acessado de foram da classe
    private _cpf: string
  ) {
    // this.cpf = _cpf; //Chamando o setter no construtor
  }

  set cpf(valor: string) {
    console.log("SETTER");
    if (valor.length < 11) return; //Só atribui se passar pela validação
    this._cpf = valor;
  }

  get cpf(): string {
    console.log("GETTER");
    return this._cpf.replace(/\D/g, "");
  }
}

const pessoa = new Pessoa("Wagner", "000.000.000-00");

pessoa.cpf = "123.123.123.";
console.log(pessoa.cpf); //Acesso como ser fosse um atributo
