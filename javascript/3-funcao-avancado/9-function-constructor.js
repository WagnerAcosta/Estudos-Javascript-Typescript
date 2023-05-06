/**Função construtora é uma função usada para criar e inicializar
   objetos que são instâncias de uma determinada classe. 
  
  * Sempre inicializa uma nova instância de um objeto
 */

function Cadastro(nome, cpf, anoNascimento) {
  //Atributos e métodos públicos
  this.nome = nome;
  this.cpf = cpf;
  this.anoNascimento = anoNascimento

  this.dadosPessoa = () => {
    console.log(`Nome: ${nome} | CPF:${cpf} | Idade: ${calculaIdade()}\n`);
  }

  //Atributos e métodos privados
  const anoAtual = new Date().getFullYear()
  const calculaIdade = () => anoAtual - anoNascimento
}
const pessoa = new Cadastro("Wagner", "00.000.000/0001-00", 1995);
pessoa.dadosPessoa();
console.log(pessoa)