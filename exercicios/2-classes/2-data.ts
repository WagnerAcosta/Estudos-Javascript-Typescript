class Data {
  constructor(public dia: number, public mes: number, public ano: number) {}

  dataParametro() {
    return `${this.dia}/${this.mes}/${this.ano}`;
  }

  diaAtual() {
    let atual = new Date();
    const dia = atual.getDate();
    const mes = atual.getMonth();
    const ano = atual.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }
}

const minhaData = new Data(10, 12, 2010);
console.log(minhaData.diaAtual());
console.log(minhaData.dataParametro());
