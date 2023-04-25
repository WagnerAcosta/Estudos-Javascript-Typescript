/**O operador ternário, é um operador condicional do Javascript, normalmente utilizado como atalho para o if.*/
// (expressão) ? 'Valor para verdadeiro' : 'Valor para falso';

const resultado = (nota) => (nota >= 7 ? "Aprovado" : "Reprovado");

console.log(resultado(7.5));
console.log(resultado(5));
