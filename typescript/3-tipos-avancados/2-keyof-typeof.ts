type CoresObj = typeof coresObj; //Pega os valores traduzido
type CoresChaves = keyof CoresObj; //Pega somente as chaves

const coresObj = {
  vermelho: "red",
  verde: "green",
  azul: "blue",
  roxo: "purple",
};

function traduzirCor(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor("vermelho", coresObj));
console.log(traduzirCor("verde", coresObj));
console.log(traduzirCor("roxo", coresObj));
