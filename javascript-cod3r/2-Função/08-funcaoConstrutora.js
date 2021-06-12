function Carro(velocidadeMaxima = 150, delta = 10) {
  //Atributo privado
  let velocidadeAtual = 0;

  //this torna o metodo publico
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) velocidadeAtual += delta;
    else velocidadeAtual = velocidadeMaxima;
  };

  //this torna o metodo publico
  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}

const uno = new Carro(); //Instanciando a função
uno.acelerar();
console.log("Uno: " + uno.getVelocidadeAtual());

const ferrari = new Carro(350, 40);
ferrari.acelerar();
console.log("Ferrari: " + ferrari.getVelocidadeAtual());

console.log(typeof Carro);
console.log(typeof ferrari);
