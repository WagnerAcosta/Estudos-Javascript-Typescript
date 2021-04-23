function mesDoAno(mesEmNumero: number) {
  switch (mesEmNumero) {
    case 1:
      return "Janeiro";
      break;
    case 2:
      return "Fevereiro";
      break;
    case 3:
      return "Março";
      break;
    case 4:
      return "Abril";
      break;
    case 5:
      return "Maio";
      break;
    case 6:
      return "Junho";
      break;
    case 7:
      return "Julho";
      break;
    case 8:
      return "Agosto";
      break;
    case 9:
      return "Setembro";
      break;
    case 10:
      return "Outubro";
      break;
    case 11:
      return "Novembro";
      break;
    case 12:
      return "Dezembro";
      break;
    default:
      return "Mês Ínavlido";
      break;
  }
}

function mesString(numero: number): string {
  let mes: string[] = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  if (numero < 0 && numero > 11) return "Numero Invalído";
  else return mes[numero];
}

// console.log(mesDoAno(110));
console.log(mesString(-1));
