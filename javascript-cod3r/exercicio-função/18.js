function escrevaNumero(numero) {
  switch (numero) {
    case 0:
      return "Zero";
    case 1:
      return "Um";
    case 2:
      return "Dois";
    case 3:
      return "Três";
    case 4:
      return "Quatro";
    case 5:
      return "Cinco";
    case 6:
      return "Seis";
    case 7:
      return "Sete";
    case 8:
      return "Oito";
    case 9:
      return "Nove";
    case 10:
      return "Dez";
    default:
      return "Número fora do intervalo!";
  }
}

console.log(escrevaNumero(1));
console.log(escrevaNumero(5));
console.log(escrevaNumero(11));
