//Função recursiva chama ela mesma
//Funciona como um loop de função
//Tem o limite de 1000 vezes

function recursiva(num) {
  console.log(num);
  if (num >= 5) return;
  num++;
  recursiva(num); //Se chama novamente
}

recursiva(0);
