//Coleção dinâmica de pares chave/valor

//Exemplo-1 Criação
const produto = new Object();
produto.nome = "Geladeira";
produto.marca = "Consul";
produto.preco = 2600;
produto.promo = 10;

console.log(produto);
delete produto.promo;
console.log(produto);

//Exemplo-2 Criação
const carro = {
  modelo: "BMW",
  valor: 120000,
  proprietario: {
    nome: "Wagner",
    idade: 25,
    endereco: {
      rua: "Rua Manoel Machado Leonardo",
      numero: 171,
      bairro: "Jardim Flórida",
    },
  },
  condutores: [
    { nome: "Wagner", idade: 28 },
    { nome: "Viviane", idade: 50 },
  ],
  valorSeguro: function () {
    return this.valor * 0.01;
  },
};
console.log(carro);
delete carro.valorSeguro;
console.log(carro.valorSeguro); //Foi excluido
