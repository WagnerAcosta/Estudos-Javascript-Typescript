let fat = (num) => {
  let fat = 1;
  for (let i = 1; i <= num; i++) {
    fat *= i;
  }
  return fat;
};

//Função recursiva
let fat2 = (num) => {
  if (num === 0) return 1;
  else {
    return num * fat(num - 1);
  }
};

console.log("Ex 1:", fat(5));
console.log("Ex 2:", fat2(5));
