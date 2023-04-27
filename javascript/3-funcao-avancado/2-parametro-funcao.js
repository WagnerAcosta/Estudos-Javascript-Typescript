/*Arguments sustenta todos os parametros enviados*/
function soma1() {
  let total = 0;
  //arguments
  for (const args of arguments) {
    total += args;
  }
  console.log("function soma1:", total);
}
soma1(1, 2, 3, 4, "wagner");


//Caso não passe o valor será undefined
function soma2(a, b, c) {
  console.log("function soma2:", a, b, c);
}
soma2(12);


//Valores padrão no parametro
function soma3(a = 0, b = 1, c = 0) {
  console.log(a + b + c);
}
soma3(2);
soma3(2, undefined, 20);


function conta(operador, acumulador, ...numeros) {
  operador === "*" ? (acumulador = 1) : (acumulador = 0);
  for (let n of numeros) {
    if (operador === "+") acumulador += n;
    if (operador === "-") acumulador -= n;
    if (operador === "/") acumulador /= n;
    if (operador === "*") acumulador *= n;
  }
  console.log(acumulador);
}
conta("-", 0, 10, 20, 30, 40);
