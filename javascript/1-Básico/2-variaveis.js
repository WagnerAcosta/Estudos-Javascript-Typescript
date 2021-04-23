/*
 * Não podemos criar variaveis com palavra reservada
 * Variavéis precisam ter nomes significativos
 * Não podem iniciar com numero
 * Não podem ter traços ou espaços
 * Utilizamos canelCase ex: nomeCliente
 * Case-sensitive: nome é diferente de Nome 
 * Não pode redeclarar a mesma variavel
 * Não utilizar var
 */

//let é uma variavel de escopo
let nomE = 'Wagner';

//const é uma variavel imutavel
const PI = 3.14;

console.log(`${nomE} nasceu em 1995`)
console.log(`Número de PI é ${PI}`)


//Exercicios
/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/
const nome = 'Wagner Duarte';
const sobrenome = 'Acosta';
const idade = 25;
const peso = 62;
const alturaEmM = 1.71; // Corrigido para metros (ao invés de cm)
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2020 - idade;

// template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);