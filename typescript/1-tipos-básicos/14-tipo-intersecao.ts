type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

const pessoa: Pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
};
console.log(pessoa);


// -------- Exemplo 2 --------
interface Employee {
  employeeID: number;
  age: number;
}
interface Manager {
  stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
  employeeID: 12345,
  age: 34,
  stockPlan: true
};

console.log(newManager)