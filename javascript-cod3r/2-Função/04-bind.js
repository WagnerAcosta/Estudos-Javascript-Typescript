//Exemplo 1
const pessoa = {
  nome: "Wagner Duarte Acosta",
  falar() {
    console.log(this.nome);
  },
};
pessoa.falar();
const teste = pessoa.falar;
teste(); //Não consegue pegar o valor do nome

const testeFalar = pessoa.falar.bind(pessoa); //Utilizando bind para setar pessoa
testeFalar();

//--------------- Arrow Function não precisa de bind ----------------
function Pessoa() {
  this.idade = 0;

  const self = this;
  setInterval(
    function () {
      self.idade++;
      console.log(self.idade);
    } /*.bind(this)*/,
    1000
  );
}
new Pessoa();
