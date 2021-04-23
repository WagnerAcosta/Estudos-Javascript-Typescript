function Fibonacci(tamanho: number) {
  let anterior: number = 0;
  let proxima: number = 1;
  let result: number = 1;

  for (let i = 0; i < tamanho; i++) {
    console.log(result);
    result = anterior + proxima;
    anterior = proxima;
    proxima = result;
  }
}
Fibonacci(5);
