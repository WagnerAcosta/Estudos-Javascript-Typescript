//new object -> Object.prototipe
//Literal
const objA = {
  chaveA: "Prototipe A",
  //__proto__: Object.propotype
};

const objB = {
  chaveB: "Prototipe B",
  //__proto__: objA
};

const objC = new Object();
objC.chaveC = "Propotipe C";

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
//console.log(objC);

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const produto = new Produto("Camiseta", 50);
produto.desconto(10);
console.log(produto);

//Literal
const produto2 = { nome: "Short", preco: 25 };
Object.setPrototypeOf(produto2, Produto.prototype);
produto2.desconto(15);
console.log(produto2);

const produto3 = Object.create(Produto.prototype);
produto3.preco = 70;
produto3.desconto(20);
console.log(produto3);
