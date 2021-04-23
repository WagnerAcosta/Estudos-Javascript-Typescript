/**
 * Javascript é baseado em protótipos para passar propriedades e metodos de um  objeto para outro
 *
 * Definição de protótipos
 * Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções
 *
 * Todos os objetos tem uma referencia interna para um protótipo (_proto_) que vem da propriedade prototype da função construtora que foi usada para criá-lo.
 * Quando tentamos acessar um membro no próprio objeto e depois a cadeia de protótipos é usada até o top (null) até encontrar (ou não) tal membro.
 */

//Construtora -> Molde (classes)
function Carro(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
  //   this.detalhes = () => "Original " + this.marca + " " + this.modelo;
}

//Carro.prototype === car1.__proto__
Carro.prototype.detalhes = function () {
  return "Propotype " + this.marca + " " + this.modelo;
};

//Instancia
const car1 = new Carro("Ford", "Mustang"); // <- Carro = Função construtora
const data = new Date(); // <- Date = Função construtora

console.log(car1);
console.log(car1.detalhes());

console.log(data);
