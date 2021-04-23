export function funcao(this: Date, name: string, age: number): void {
  console.log(this);
  console.log(name, age);
}

funcao.call(new Date(), "wagner", 25);
funcao.apply(new Date(), ["Viviane", 23]);
