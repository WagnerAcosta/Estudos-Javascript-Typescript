/**
 * Tipo any é um tipo especial que permite a você trabalhar com 
    qualquer valor sem restrições de tipo.
 * Basicamente desabilita a verificação de tipo para essa variável.
 * Só utilizar em último caso.
 */

function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage("Olá"));
console.log(showMessage(1));
