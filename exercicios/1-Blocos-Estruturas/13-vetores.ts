function concVetor(v1: string[], v2: string[]) {
  let novoArray: string[] = [];
  return (novoArray = v1.concat(v2).sort());
}

let v1: string[] = ["Eduardo", "Pet", "Messi", "Ronaldo", "Pele"];
let v2: string[] = ["Wagner", "Cabral", "Amarildo", "Paula", "Gabriel"];

v1.sort();
v2.sort();

console.log("Novo Array: " + concVetor(v1, v2));
