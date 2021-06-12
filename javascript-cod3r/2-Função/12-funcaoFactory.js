//------ Factory simples -------
function criarPessoa() {
  return {
    nome: "Wagner",
    idade: 25,
  };
}
//console.log(criarPessoa());

function criarProduto(nome, preco) {
  return { nome, preco, desconto: 0.1 };
}
//console.log(criarProduto("Tv", 1500));
