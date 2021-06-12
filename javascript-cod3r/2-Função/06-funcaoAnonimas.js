//Função anônima é uma função sem nome
const soma = function (x, y) {
  return x + y;
};

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
};

imprimirResultado(2, 3, soma);
imprimirResultado(4, 6, function (x, y) {
  return x - y;
});
imprimirResultado(5, 8, (a, b) => a * b); //Função anônima arrow

//Exemplo com Objetos
const pessoa = {
  falar: () => console.log("Olá Wagner"),
};
pessoa.falar();
