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


// -------- Exemplo 2 -------
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
// myResult = "failure";       //* Invalid


// -------- Exemplo 3 -------
type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1;    //* Valid
diceRoll = 2;    //* Valid
// diceRoll = 7;    //* Invalid