/**Boolena: é um tipo de dado lógico que pode ter apenas um de dois valores possíveis: verdadeiro ou falso */

const aprovado = true; //Boolean = true || false (lógico)
let idade = 25;

console.log(!aprovado);
console.log(!!idade);

console.log("" || "Wagner");

/**
 * Os verdadeiros
 * (!!3)
 * (!!-1)
 * (!!' ')
 * (!!"texto")
 * (!![])
 * (!!{})
 * (!!Infinity)
 * (!!(isAtivo = true))
 */

/**
 * Os falsos
 * (!!0)
 * (!!'')
 * (!!null)
 * (!!NaN)
 * (!!undefined)
 * (!!(isAtivo = false))
 */
