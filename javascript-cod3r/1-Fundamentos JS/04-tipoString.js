const nome = "wagner";

console.log(nome.charAt(4));
console.log(nome.charCodeAt(4));
console.log(nome.indexOf("a"));

console.log("\n" + nome.substring(1));
console.log(nome.substring(0, 2));

console.log("\nMeu nome é ".concat(nome));
console.log(nome.replace(/\a/, "i")); //Expressões regulares
console.log(nome.replace(/\w/g, "i")); //Expressões regulares

console.log("wagner,duarte,acosta".split(",")); //Converte string em Array

console.log(`${nome} duarte`); //Template string

const up = (texto) => texto.toUpperCase();
console.log(`Olá... ${up(nome)}`);
