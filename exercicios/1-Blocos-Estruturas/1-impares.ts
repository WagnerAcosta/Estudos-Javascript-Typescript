function Impares(a: number, b: number) {
  if (a > b) return "A é maior B";
  for (let i = a; i <= b; i++) {
    if (i % 2 === 1) console.log(i);
  }
}
let a: number = 1;
let b: number = 21;

Impares(a, b);
