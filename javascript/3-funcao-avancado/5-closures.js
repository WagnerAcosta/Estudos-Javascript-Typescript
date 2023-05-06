/**
 * Closure é quando uma função é capaz de "lembrar" e
     acessar seu escopo léxico mesmo quando ela está sendo
     executada fora de seu escopo léxico.
 */

//Escopo Global
function retornaFuncao(nome) {
  //Escopo função pai
  return function () {
    //escopo da função
    return nome;
  };
}
const funcao1 = retornaFuncao("wagner");
const funcao2 = retornaFuncao("duarte");

console.log(funcao1(), funcao2());


//-----------------Exemplo 2 -----------------

const books = 'book 1'

const external = () => {
  const books = 'book 2'

  const internal = () => {
    // const books = 'books 3'
    console.log(books.toUpperCase())
  }
  internal()
}
//Ele busca dentro do escopo, caso não encontre busca no externo até chegar no escopo global. 
external()