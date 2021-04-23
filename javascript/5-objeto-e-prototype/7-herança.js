function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

//Herança
function Camiseta(nome, preco, cor = "branca") {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number") return;
      estoque = valor;
    },
  });
}
Caneca.prototype = Object.create(Caneca.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto("Verão", 40);
const camiseta = new Camiseta("Regata", 50, "azul");
const caneca = new Caneca("Star Wars", 50, "Preta", 5);

console.log(produto);
console.log(camiseta);
console.log(caneca);
