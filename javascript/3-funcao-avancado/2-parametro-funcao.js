/*Expressões function vem com parametro arguments padrão*/
function soma1() {
  let total = 0;
  for (const args of arguments) {
    total += args;
  }
  console.log(total);
}
soma1(1, 2, 3, 4);

//Caso não passe o valor será undefined
function soma2(a, b, c) {
  console.log(a, b, c);
}
soma2(12);

//Valores padrão no parametro
function soma3(a = 0, b = 1, c = 0) {
  console.log(a + b + c);
}
soma3(2);
soma3(2, undefined, 20); //forma de assumir o valor padrão

function conta(operador, acumulador, ...numeros) {
  for (let n of numeros) {
    if (operador === "+") acumulador += n;
    if (operador === "-") acumulador -= n;
    if (operador === "/") acumulador /= n;
    if (operador === "*") acumulador *= n;
  }
  console.log(acumulador);
}
conta("*", 1, 10, 20, 30, 40);
