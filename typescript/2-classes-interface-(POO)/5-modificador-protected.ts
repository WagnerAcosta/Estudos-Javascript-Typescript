//Public: pode acessar e atribuir dentro e fora da classe
//Private: pode acessar e atribuir somente no escopo da classe
//Protected: pode acessar e atribuir somente classe e sub classes

export class Empresa {
  public readonly nome: string; //public não necessario
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador) {
    this.colaboradores.push(colaborador);
  }

  mostraColaborador() {
    for (const colab of this.colaboradores) {
      console.log(colab);
    }
  }
}
export class Colaborador {
  constructor(public readonly id: number, public readonly nome: string) {}
}

export class Udemy extends Empresa {
  constructor() {
    super("Udemy", "12.123.123/0001-11");
  }

  excluirColaborador(): Colaborador | string {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return "Nenhum colaborador cadastrado!";
  }
}

const empresa = new Udemy();

const colaborador1 = new Colaborador(1, "Wagner");
const colaborador2 = new Colaborador(2, "Pedro");
const colaborador3 = new Colaborador(3, "Rafael");

empresa.adicionaColaborador(colaborador1);
empresa.adicionaColaborador(colaborador2);
empresa.adicionaColaborador(colaborador3);

console.log(empresa);

const excluido = empresa.excluirColaborador();

console.log(excluido);
