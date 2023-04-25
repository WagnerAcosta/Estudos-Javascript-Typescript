/**Um objeto é uma entidade independente, com propriedades e tipos. */

const cadastro = {
  //Atributos
  nome: "Wagner",
  idade: 25,
  endereco: { rua: "Rua 1", numero: 171, complemento: "Casa" },

  //Metodos
  anoNascimento(idade) {
    return 2021 - idade;
  },
};

console.log(cadastro);
console.log(cadastro.anoNascimento(26));
