/**função geradora é um tipo especial de função que permite definir
    um algoritmo iterativo escrevendo uma única função que pode ser
    pausada e retomada quantas vezes forem necessárias.
  
  *Cada vez que a palavra-chave yield é encontrada na função geradora, 
    ela pausa a execução e retorna um valor ao iterador gerador.
 */


//-----------Exemplo 1--------------
function* gerador1() {
  yield "Valor 1";
  yield "Valor 2";
  yield "Valor 3";
}
const g1 = gerador1();
for (const valor of g1) {
  console.log(valor);
}


//-----------Exemplo 2--------------
function* gerador2() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}
const g2 = gerador2();
console.log(g2.next()); //{ value: 0, done: false }
console.log(g2.next()); //{ value: 1, done: false }


//-----------Exemplo 3--------------
function* gerador3() {
  yield 0;
  yield 1;
  yield 2;
}
function* gerador4() {
  yield* gerador3();
  yield 3;
  yield 4;
  yield 5;
}
const g4 = gerador4();
for (const valor of g4) {
  console.log(valor);
}


//-----------Exemplo 4--------------
function* gerador5() {
  yield function () {
    console.log("Valor de Y1");
  };
  yield function () {
    console.log("Valor de Y2");
  };
}
const g5 = gerador5();
const f1 = g5.next().value;
const f2 = g5.next().value;
f1();
f2();
