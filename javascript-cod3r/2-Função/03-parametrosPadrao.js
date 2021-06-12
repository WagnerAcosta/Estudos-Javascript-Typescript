//Estrategia 1
function soma1(a, b) {
  a = a || 1;
  b = b || 1;
  return a + b;
}
console.log(soma1(), soma1(3, 5));

//Estrategia 2
function soma2(a, b, c) {
  a = a !== undefined ? a : 1;
  b = 1 in arguments ? b : 1;
  c = isNaN(c) ? 1 : c;

  return a + b + c;
}
console.log(soma2(), soma2(3, 6, 1));

//es2015
function soma3(a = 1, b = 1) {
  return a + b;
}
console.log(soma3(), soma3(4, 7));
