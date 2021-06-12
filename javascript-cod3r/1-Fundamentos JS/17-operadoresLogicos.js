/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÃO
*/
// const expressaoAnd = true && true && true && true;
// const expressaoOr = false || false || false || false;

// const usuario = 'Luiz'; // form usuário digitou
// const senha = '123456'; // form usuário digitou

//                          True               False
// const vaiLogar = usuario === 'Luiz' && senha === '12345';

console.log(!!true);

function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2;
  const comprarTv50 = trabalho1 && trabalho2;
  const comprarTv32 = trabalho1 != trabalho2;
  const manterSaudavel = !comprarSorvete;
  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}
console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
