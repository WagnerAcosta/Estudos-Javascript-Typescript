/**
    Escopo é a acessibilidade de objetos, variáveis e funções em diferentes partes do código.
 */

//Ele vai busca em todos os escopo a variável.
const nome = "Nome global";

function funcao1() {
  const nome = 'Nome função 1'
  console.log(nome);
}

function funcao2() {
  const nome = "Nome funcao 2"; //Não altera o valor da funcão
  funcao1();
}

funcao1();
funcao2();