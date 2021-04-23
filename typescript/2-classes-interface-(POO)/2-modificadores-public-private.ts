//Public: pode acessar e atribuir dentro e fora da classe
//Private: pode acessar e atribuir somente no escopo da classe

export class Empresa {
  public readonly nome: string; //public não necessario
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

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

const empresa = new Empresa("Udemy", "12.123.123/0001-11");

const colaborador1 = new Colaborador(1, "Wagner");
const colaborador2 = new Colaborador(2, "Pedro");
const colaborador3 = new Colaborador(3, "Rafael");

empresa.adicionaColaborador(colaborador1);
empresa.adicionaColaborador(colaborador2);
empresa.adicionaColaborador(colaborador3);

// empresa.nome = "Facebook"; Por ser readonly não pode ser alterado

console.log(empresa);
empresa.mostraColaborador();
