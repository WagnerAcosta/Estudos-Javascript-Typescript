/**
 * Referência(mutável) - array, object, function
 * - Passados por referência
 */
const a = { name: "Wagner" };
const b = a; //Aponta para a referencia de A
b.name = "Teste";
console.log(a, b);

/**
 * Valores Primitivos (Imutáveis) - string, number,
 * boolean, undefined, null (bigint, symbol)
 * - Valores copiados
 */
let w = 10;
let y = w; //Copia por valor
y++;
console.log(w, y);

/**
 * Null = ausência intencional de um valor na variavel
 * Undefined = não teve valor atribuído
 */

let valorUndefined;
console.log(valorUndefined, valorUndefined + 3, `${valorUndefined}`);
let valorNull = null;
console.log(valorNull, valorNull + 3, `${valorNull}`);
