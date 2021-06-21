function feira(fruta) {
  const f = fruta.toLowerCase();
  switch (f) {
    case "maçã":
      return "Não vendemos esta fruta aqui!";
      break;
    case "kiwi":
      return "Estamos com escassez de kiwi!";
      break;
    case "melancia":
      return "Está 3 reais o quilo!";
      break;
    default:
      return "Nome da fruta incorreta!";
  }
}
console.log(feira("Melancia"));
console.log(feira("MAÇã"));
console.log(feira("Kiwi"));
console.log(feira("Kiw"));
