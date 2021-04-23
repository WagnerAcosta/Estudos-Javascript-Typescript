function quitacaoEmprestimo(valorE: number, valorP: number, juros: number) {
  let parcela: number = 0;
  let totalJuros: number = 0;
  let jurosParcela = valorP * juros;
  let PsemJuros = valorP - jurosParcela;

  while (valorE > 0) {
    if (valorP > valorE) {
      PsemJuros = valorE;
      jurosParcela = valorE * juros;
    }
    console.log(
      `Parcela: ${parcela} | Saldo Devedor: R$ ${valorE.toFixed(
        2
      )} | Parcela s/ Juros: R$ ${PsemJuros.toFixed(
        2
      )} | Juros Pagos: R$ ${jurosParcela.toFixed(2)}`
    );

    totalJuros += jurosParcela;
    valorE -= valorP - jurosParcela;
    parcela++;
  }

  console.log(`\nTotal de juros pagos: R$ ${totalJuros}`);
}

let valorEmprestimo: number = 5000;
let valorPagoMes: number = 500;
let jurosAoMes: number = 0.1; //2% de juros

quitacaoEmprestimo(valorEmprestimo, valorPagoMes, jurosAoMes);
