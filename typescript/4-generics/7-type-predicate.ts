//                                        Type Predicate
export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

// console.log(isNumber("123"));
// console.log(isNumber(123));

export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((soma, valor) => {
    if (isNumber(soma) && isNumber(valor)) {
      return soma + valor;
    }
    return soma;
  }, 0);
  return retorno;
}

console.log(soma(1, 2, 3));
console.log(soma(...[1, 2, 3, "a", "b", 20]));
console.log(soma("a", "b"));
