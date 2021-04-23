function numeroInterio(n: number): boolean {
  let primo: number = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) primo++;
    if (primo > 2) return false;
  }
  return true;
}
console.log(numeroInterio(6));
