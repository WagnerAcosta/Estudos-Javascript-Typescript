function novoSalario(salario: number) {
  if (salario >= 500 && salario < 1500) return (salario += salario * 0.025);
  else if (salario >= 1500 && salario < 2000)
    return (salario += salario * 0.02);
  else if (salario >= 2000 && salario < 2500)
    return (salario += salario * 0.015);
  else if (salario >= 2500 && salario < 3000)
    return (salario += salario * 0.01);
}
let nome: string = "Wagner";
let salario: number = 1900;

console.log(
  `Nome: ${nome} \nSalario: ${salario}\nNovo Salário: ${novoSalario(salario)}`
);
