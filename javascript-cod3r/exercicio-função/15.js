function compras(modelo) {
  let m = modelo.toLowerCase();
  switch (m) {
    case "hatch":
      return "Compra realizada com sucesso!";

    case "sedans":
    case "motocicletas":
    case "caminhonetes":
      return "Tem certeza que prefere este modelo?";

    default:
      return "Não trabalhamos com este tipo de automóvel!";
  }
}

console.log(compras("hatcH"));
console.log(compras("motocicletas"));
console.log(compras("SUV"));
