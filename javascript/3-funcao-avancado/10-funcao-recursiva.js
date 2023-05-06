/**Função recursiva é uma função que chama a si mesma até 
   encontrar uma instrução de parar. Essa técnica é chamada de recursão.
 */

function recursiva(num) {
  console.log(num);
  if (num >= 5) return;
  num++;
  recursiva(num); //Se chama novamente
}
recursiva(0);


//Exemplo 2
function factorial(n) {
  if (n <= 1) return 1;
  else return n * factorial(n - 1)
}
console.log('fatorial: ', factorial(4))