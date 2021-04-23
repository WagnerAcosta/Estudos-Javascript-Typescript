function Produto(nome, preco, estoque) {
  //Protegendo parametro ESTOQUE
  Object.defineProperty(this, "estoque", {
    enumerable: true, //Mostrar chave
    value: estoque, //Valor
    writable: false, //Pode alterar?
    configurable: false, // Pode ser reconfiguravel
  });

  //defineProperties(Varios)
  Object.defineProperties(this, {
    nome: {
      enumerable: true, //Mostrar chave
      value: nome, //Valor
      writable: false, //Pode alterar?
      configurable: false, //Pode ser reconfiguravel
    },
    preco: {
      enumerable: true, //Mostrar chave
      value: preco, //Valor
      writable: false, //Pode alterar?
      configurable: false, //Pode ser reconfiguravel
    },
  });
}

const produto1 = new Produto("Camiseta", 20, 3);
produto1.estoque = 100; //writable
delete produto1.estoque; //configurable não permite excluir
console.log(produto1);
console.log(Object.keys(produto1));
