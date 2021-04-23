const _velocidade = Symbol();

class Carro {
  constructor(modelo) {
    this.modelo = modelo;
    this[_velocidade] = 0;
  }

  get velocidade() {
    console.log("GETTER");
    return this[_velocidade];
  }

  set velocidade(valor) {
    console.log("SETTER");
    if (typeof valor !== "number") return;
    if (valor > 100 || valor < 0) return;
    this[_velocidade] = valor;
  }

  acelerar() {
    if (this[_velocidade] >= 100)
      return `Velocidade Maxima atingida: ${this[_velocidade]} KM`;
    this[_velocidade] += 5;
  }

  freiar() {
    if (this[_velocidade] <= 0) return `Carro parou`;
    this[_velocidade] -= 5;
  }
}
const carro1 = new Carro("Formula 1");
carro1.velocidade = 200; //Não é possivel setar sem verificação
console.log(carro1.velocidade);

//-------------Exemplo classe Pessoa-------------
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(valor) {
    valor = valor.split(" ");
    this.nome = valor.shift(" ");
    this.sobrenome = valor.join(" ");
  }
}

const pessoa = new Pessoa();
pessoa.nomeCompleto = "Viviane duarte acosta";
console.log(pessoa);
