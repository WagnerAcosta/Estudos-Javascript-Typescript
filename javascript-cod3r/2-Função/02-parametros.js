//Parametros são opcionais
function area(l, a) {
  const area = l * a;
  if (area > 20) console.log("Valor acima do permitido: ", area, "m2.");
  else return area;
}
console.log(area(3, 4));
console.log(area(5, 7));

//Parametro variáveis
function soma() {
  let soma = 0;
  for (i in arguments) {
    soma += arguments[i];
  }
  return soma;
}
console.log(soma(2, 5, 7));
