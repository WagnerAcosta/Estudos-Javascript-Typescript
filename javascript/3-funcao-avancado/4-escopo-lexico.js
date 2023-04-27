/**Escopo é a propriedade que determina onde uma variável pode ser utilizada
   como um identificador em um programa. Uma variável declarada em uma função 
   é normalmente local; o contexto define o escopo.
 */

const nome = "Nome global";

function funcao1() {
  console.log(nome);
}

function funcao2() {
  const nome = "Nome funcao 2"; //Não altera o valor da funcão falaNome
  funcao1();
}

funcao1();
funcao2();
