/** Em JavaScript, funções são objetos de primeira classe, 
      pois elas podem ter propriedades e métodos como qualquer outro objeto. 
      O que as difere de outros objetos é que as funções podem ser chamados. 
      Em resumo, elas são objetos Function.
*/

console.log(typeof Object);
console.log(typeof new Object());

const Cliente = function () { };
console.log('\n' + typeof Cliente);
console.log(typeof new Cliente());

class Produto { }
console.log('\n' + typeof Produto);
console.log(typeof new Produto());
