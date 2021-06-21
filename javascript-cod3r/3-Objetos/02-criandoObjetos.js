//Notação Literal
const objeto1 = {};
console.log(objeto1);

//Object em JS
const objeto2 = new Object();
console.log(objeto2);

//Função construtora
function Produto(nome, preco, desc) {
  this.nome = nome;
  this.getPrecoDesconto = () => {
    return preco * (1 - desc);
  };
}
const p1 = new Produto("Mesa", 1000, 0.1);
const p2 = new Produto("Computador", 5500, 0.1);
console.log("Desconto:", p1.getPrecoDesconto(), p2.getPrecoDesconto());

//Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    },
  };
}
const f1 = criarFuncionario("Wagner", 1500, 3);
const f2 = criarFuncionario("Eduardo", 2500, 1);
console.log("Salário Liquido:", f1.getSalario(), f2.getSalario().toFixed(2));

//Object.create
const filha = Object.create(null);
filha.nome = "Maria";
console.log(filha);

//Função famosa que retorna objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info);
