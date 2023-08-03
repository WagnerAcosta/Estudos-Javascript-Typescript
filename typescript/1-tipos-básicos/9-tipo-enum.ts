enum Cores {
  VERMELHO = 10, // 10
  AZUL = 100, // 100
  AMARELO = 200, // 200
}

enum Cores {
  ROXO = "ROXO",
  VERDE = 201,
  ROSA, //202
}

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.AMARELO); //Passando o valor 200

enum StatePayment {
  Ativo, Concluido, Vencido
}
console.log(StatePayment[0])
console.log(StatePayment.Concluido)
