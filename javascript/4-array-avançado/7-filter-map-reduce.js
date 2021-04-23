const numero = [1, 21, 27, 20];

const num = numero
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((acumulador, valor) => acumulador + valor);

console.log(num);
