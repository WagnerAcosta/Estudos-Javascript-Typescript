/**array.forEach(callback, thisArgs)
 * callback(item, index, array)
 
 * Utilizado para percorrer os valores e não retorna valores
 */

const num1 = [10, 20, 30];
let total = 0;
num1.forEach((valor, indice, array) => {
  total += valor;
});

console.log("Total: " + total);
