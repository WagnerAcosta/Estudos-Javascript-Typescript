function diaUtil(dia) {
  switch (dia) {
    case 1:
      return "Fim de semana!";
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return "Dia util";
    case 7:
      return "Final de semana";
    default:
      return "Dia inválido!";
  }
}

console.log(diaUtil(10));
console.log(diaUtil(1));
console.log(diaUtil(6));
console.log(diaUtil(4));
console.log(diaUtil(7));
