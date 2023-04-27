/**
 * IIFE => Immediately invoked function expression
 * São funções que são automaticamente executadas imediatamente após sua declaração, 
    sem necessidade de chamadas.
 */

(function (idade, peso, altura) {
  const sobrenome = "gonçalves";

  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("Wagner"));
  }

  falaNome();
  console.log(idade, peso, altura);
})(25, 62.34, 1.72);
