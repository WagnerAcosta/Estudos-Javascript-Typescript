interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocoloType<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

//Assumi a declaração atribuidada
const aluno1: PessoaProtocolo = {
  nome: "wagner",
  sobrenome: "duarte",
  idade: 25,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 55,
  sobrenome: 99,
  idade: 25,
};

const alunoType: PessoaProtocoloType = {
  nome: "Sou type",
  sobrenome: "olá",
  idade: 23,
};

console.log(aluno1, aluno2);
console.log(alunoType);
