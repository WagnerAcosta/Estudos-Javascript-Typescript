/**
 * For clássico = Geralmente com iteráveis (array ou strings)
 * For IN = Retorna o índice ou chave (string, array ou object)
 * For OF = Retorna o valor em si (iteráveis, arrays ou strings)
 */
for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? "par" : "impar";
  console.log(par);
}

const frutas = ["maca", "banana", "pera", "uva"];
for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice: ${i} Valor: ${frutas[i]}`);
}
