function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new ReferenceError("X e Y precisam ser números");
  }
  return x + y;
}

try {
  console.log('soma: ', soma(1, 2));
  console.log('soma: ', soma("1", 2));
} catch (error) {
  console.log('\nerror: ', error.message);
  console.log("Alguma coisa amigável para o usuario.");
}
