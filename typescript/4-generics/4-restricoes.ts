type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: "Rosa",
  vacinas: ["vavina 1", "vacina 2"],
  idade: 25,
};

const vacinas = obterChave(animal, "vacinas");
const cor = obterChave(animal, "cor");

console.log(vacinas, cor, obterChave(animal, "idade"));
