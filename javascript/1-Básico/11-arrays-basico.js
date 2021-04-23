//index       123456
const nome = "wagner";

//index          0         1         2         3          4         5
const alunos = ["wagner", "duarte", "acosta", "viviane", "duarte", "acosta"];

alunos[1] = "gonçalves"; //Reatribuindo

alunos.push("Eduardo"); //Adiciona no final
alunos.unshift("viviane"); //Adiciona no inicio

alunos.pop(); //remove o ultimo
alunos.shift(); //remove o inicio

console.log(alunos.slice(0, 3)); //Fatiando o array
console.log(alunos.slice(0, -1)); //Elimina o ultimo

console.log(alunos);
console.log(alunos.length);

console.log(typeof alunos);
console.log(alunos instanceof Array);
