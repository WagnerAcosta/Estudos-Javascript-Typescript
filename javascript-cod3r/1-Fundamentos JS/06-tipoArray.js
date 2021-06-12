const valores = [3, 5.1, 1, 3.3];

console.log(valores[4]); //Undefined
console.log(valores.length);

valores.push({ id: 3 }, false, null, "teste");

console.log(valores);
console.log(typeof valores);

/**
 * valores.pop()
 * delete valores[1]
 */
