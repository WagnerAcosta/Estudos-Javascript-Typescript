/**Arrays são utilizados para armazenar mais de um valor com o mesmo 
   tipo em uma única variável.
  
 * A declaração explícita de tipo permite que você especifique 
    o tipo de dados esperado para os elementos do array.
    let array: number[] = [1, 2, 3];

 * Ou utilizar o construtor "Array" para criar um novo array 
    com os elementos fornecidos.
    let array: Array<number> = new Array<number>(1, 2, 3);
 */

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const multiplica = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaString("a", "b", "c");
const upperCase = toUpperCase("a", "b", "c");

console.log(multiplica);
console.log(concatenacao);
console.log(upperCase);
