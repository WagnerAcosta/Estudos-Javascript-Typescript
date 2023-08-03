/**
 * undefined: variável não teve um valor atribuído previamente.
 * null: representa uma ausência intencional de um valor
 */

let x;
if (typeof x === "undefined") x = 20;
console.log(x * 2);

export function createPerson(firstName: string, lastName?: string): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName, lastName
  };
}


//============= Exemplo 2 ===========

export function squareOf(x: any): number | null {
  if (typeof x === "number") return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(10);

if (squareOfTwoNumber === null) {
  console.log("Conta inválida");
} else {
  console.log(squareOfTwoNumber * 100);
}
