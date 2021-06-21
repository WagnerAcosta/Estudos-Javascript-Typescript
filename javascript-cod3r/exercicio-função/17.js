function aumentoSalarial(salarioAtual = 0, plano) {
  switch (plano.toLowerCase()) {
    case "a":
      return (salarioAtual * 1.1).toFixed(2);
    case "b":
      return (salarioAtual * 1.15).toFixed(2);
    case "c":
      return (salarioAtual * 1.2).toFixed(2);
    default:
      return "Plano incorreto!";
  }
}

const p1 = aumentoSalarial(1000, "A");
const p2 = aumentoSalarial(1000, "b");
const p3 = aumentoSalarial(1000, "c");
const erro = aumentoSalarial(1000, "Z");
console.log(p1, p2, p3, erro);
