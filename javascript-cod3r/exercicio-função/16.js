function calculadora(v1 = 0, v2 = 0, operacao) {
  switch (operacao) {
    case "+":
      return v1 + v2;
    case "-":
      return v1 - v2;
    case "*":
      return v1 * v2;
    case "/":
      return v1 / v2;
    default:
      return "Operação incorreta!";
  }
}

const soma = calculadora(10, 2, "+");
const subtracao = calculadora(10, 2, "-");
const multi = calculadora(10, 2, "*");
const divisao = calculadora(10, 2, "/");
const erro = calculadora(10, 2, "a");

console.log(soma, subtracao, multi, divisao, erro);
