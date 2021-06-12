/*
Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
=== igualdade estrita (valor e tipo)
!== diferente estrito (valor e tipo)
*/
const num1 = 10; // number
const num2 = 10; // number
const comp = num1 == num2; //Comparação de valores
console.log(comp);

const d1 = new Date(0);
const d2 = new Date(0);
console.log(d1 == d2); //Comparação por referência
console.log(d1.getTime() == d2.getTime()); //Comparação de valores
