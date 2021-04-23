/**
 * Valores Primitivos (Imutáveis) - string, number,
 * boolean, undefined, null (bigint, symbol)
 * - Valores copiados
 */
let ia = 'A';
let ib = ia; //Faz a copia
console.log(ia, ib);

ia = 'Olá';
console.log(ia, ib);//Não afeta a variavel B


/**
 * Referência(mutável) - array, object, function
 * - Passados por referência
 */
let ma = [1, 2, 3, 4];
let mb = ma;
console.log(ma, mb);

ma.push(10);
console.log(ma, mb);//Afeta a variavel B