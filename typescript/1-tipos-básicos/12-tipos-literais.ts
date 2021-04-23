let x = 10;
x = 0b1010;
const y = 10;
const a = 100;

const pessoa = {
  nome: "Luiz" as const, //Variavel é do tipo Luiz
  sobrenome: "Miranda",
};
// pessoa.nome="wagner" //Não permite

export function escolhaCor(cor: "Vermelho" | "Amarelo" | "Azul"): string {
  return cor;
}
console.log(escolhaCor("Vermelho"), pessoa, x, y);
