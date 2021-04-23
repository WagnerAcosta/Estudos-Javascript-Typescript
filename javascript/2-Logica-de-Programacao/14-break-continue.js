const numero = [1, 2, 3, 4, 5, 6, 7];

for (let n in numero) {
  if (numero[n] === 2) {
    console.log("Pulei");
    continue;
  }

  if (numero[n] === 6) {
    console.log("Parou o laço");
    break;
  }
  console.log(n);
}
