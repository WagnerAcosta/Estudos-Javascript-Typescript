function Equacao(a: number, b: number, c: number) {
  let x = b * b - 4 * a * c;
  let x1 = ((-b + Math.sqrt(x)) / 2) * a;
  let x2 = ((-b - Math.sqrt(x)) / 2) * a;

  if (x < 0) {
    console.log("RAIZ: " + x);
    x1 = 0;
    x2 = 0;
  } else {
    console.log("RAIZ: " + x);
  }
  console.log("x`: " + x1);
  console.log("x``: " + x2);
}

Equacao(1, 3, -28);
