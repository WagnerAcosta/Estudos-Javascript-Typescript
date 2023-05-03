// Valor por referência
//                 0         1        2        3          4
const empresa = ["google", "face", "Thanos", "Volk"];
const sites = new Array("OLX", "WHATTS", "PUSH"); //Construtor de array


const novoEmpresa = empresa.slice(1, -1); //Criando um novo array
console.log(novoEmpresa);


const nome = "Luiz Otávio Miranda";
const nomes = nome.split(" "); //Separa
console.log(nomes);


const funcionario = ["Luiz", "Otávio", "Miranda"];
const dados = funcionario.join(" "); //Junta
console.log(dados);
