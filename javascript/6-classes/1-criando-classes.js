//Exemplo Classes
class CasaClass {
  constructor(endereco, numero, bairro) {
    this.endereco = endereco;
    this.numero = numero;
    this.bairro = bairro;
  }
  meuEndereco() {
    console.log(
      `Meu endereço é ${this.endereco}, ${this.numero}, ${this.bairro}`
    );
  }
}

//--------------Exemplo Function--------------
function CasaFunc(endereco, numero, bairro) {
  this.endereco = endereco;
  this.numero = numero;
  this.bairro = bairro;
}
CasaFunc.prototype.meuEndereco = function () {
  console.log(
    `Meu endereço é ${this.endereco}, ${this.numero}, ${this.bairro}`
  );
};

const end = new CasaClass("Rua Mato", 100, "Florida 1");
console.log(end);

const casaFunction = new CasaFunc("Rua function", 120, "JS");
console.log(casaFunction);
