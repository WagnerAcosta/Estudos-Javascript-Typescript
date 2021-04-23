/**
 * Closure é quando uma função é capaz de "lembrar" e
 * acessar seu escopo léxico mesmo quando ela está sendo
 * executada fora de seu escopo léxico.
 */

//Função Global
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
