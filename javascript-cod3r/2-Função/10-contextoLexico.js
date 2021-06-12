//Nessa situação chama a variavel no contexto da função
const valor = "Global";

function minhaFunction() {
  console.log(valor);
}

function executa() {
  const valor = "Local";
  console.log(valor);

  minhaFunction(); //Chama a função
}
executa();
