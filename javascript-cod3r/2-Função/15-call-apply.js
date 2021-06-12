function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
  nome: "TV",
  preco: 1500,
  desc: 0.1,
  getPreco,
};
console.log(produto.getPreco());

const carro = { preco: 30000, desc: 0 };
console.log(getPreco.call(carro, 0.1, "$")); //Associa a função com o objeto
console.log(getPreco.apply(carro, [0.2, "%"]));

//******** Exemplo com call ********
const article = {
  title: "A procura da felicidade",
};
function print() {
  console.log(`${this.title}`);
}
print.call(article); //Associa a função com o objeto

//******** Exemplo com Apply ********
function soma(x, y) {
  const soma = this + x + y;
  console.log(soma);
}
soma.apply(1, [4, 5]);

//******** Exemplo com Bind *********
function subtracao(x, y = 0) {
  const sub = this + x + y;
  console.log(sub);
}
const result = subtracao.bind(5);
result(10);
