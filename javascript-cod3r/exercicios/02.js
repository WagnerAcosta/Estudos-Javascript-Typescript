function triangulo(x, y, z) {
  if (x == y && x == z) return "Equilátero";
  else if (x == y || x == z || y == z) return "Isósceles";
  else return "Escaleno";
}

const result = triangulo(3, 3, 3);
console.log(result);
