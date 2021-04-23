const pessoa = {
  //Atributos
  nome: "Wagner",
  sobrenome: "Duarte",
  idade: 25,

  //Metódos
  fala() {
    this.idade++;
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
  },
};
console.log(pessoa);
pessoa.fala();

function cadAnimal(nome, especie, idade) {
  return { nome, especie, idade };
}
const animal1 = cadAnimal("bilu", "cachorro", 3);
console.log(animal1);
