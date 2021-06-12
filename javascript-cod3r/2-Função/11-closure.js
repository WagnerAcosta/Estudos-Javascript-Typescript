//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas à função

const x = "Global";

function fora() {
  const x = "Local";

  return function dentro() {
    return x;
  };
}

const minhaFuncao = fora();
console.log(minhaFuncao());
