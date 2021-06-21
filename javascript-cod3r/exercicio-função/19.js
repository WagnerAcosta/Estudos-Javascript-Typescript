function totalPedido(codigoProduto, quantidade) {
  switch (codigoProduto) {
    case 100:
      return (quantidade * 3).toFixed(2);
    case 200:
      return (quantidade * 4).toFixed(2);
    case 300:
      return quantidade * (5.5).toFixed(2);
    case 400:
      return quantidade * (7.5).toFixed(2);
    case 500:
      return quantidade * (3.5).toFixed(2);
    case 600:
      return quantidade * (2.8).toFixed(2);
    default:
      return "Produto Inválido!";
  }
}

const p1 = totalPedido(400, 2);
const p2 = totalPedido(900, 2);
console.log(p1, p2);
