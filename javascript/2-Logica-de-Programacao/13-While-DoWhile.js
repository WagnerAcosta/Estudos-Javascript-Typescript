function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 6;
let rand = 5;

//Verificar o valor antes de entrar no laço
while (rand !== 5) {
  //rand = random(min, max);
  console.log(rand);
}
console.log("######");

do {
  console.log(rand);
  rand = random(min, max);
} while (rand !== 5);
//Verifica depois de passar pelo laço
