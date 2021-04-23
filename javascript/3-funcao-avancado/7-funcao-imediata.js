//IIFE => Immediately invoked function expression

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
