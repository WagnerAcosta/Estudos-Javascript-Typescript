//Super Class
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}
Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(
    `Ag: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`
  );
};

//Polimorfismo é sobreescrever metodos PAI
function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;
//Reescrevendo metodo sacar
ContaCorrente.prototype.sacar = function (valor) {
  if (this.saldo + this.limite < valor) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};
const contaCorrente = new ContaCorrente(11, 11, 0, 100);
contaCorrente.depositar(10);
contaCorrente.sacar(150);

//Polimorfismo é sobreescrever metodos PAI
function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;
const contaPoupanca = new ContaPoupanca(22, 66, 200);
contaPoupanca.depositar(100);
contaPoupanca.sacar(100);
