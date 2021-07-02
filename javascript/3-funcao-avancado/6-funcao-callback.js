/**
 * callback é um tipo de função que só é executada após o processamento de outra função.
 * Na linguagem JavaScript, quando uma função é passada como um argumento de outra, ela é,
 * então, chamada de callback.
 */

function rand(min = 500, max = 3000) {
  const tempo = Math.random() * (max - min) + min;
  return Math.floor(tempo);
}

function f1(callback) {
  setTimeout(() => {
    console.log(`Tempo ${rand()} F1`);
    if (callback) callback();
  }, rand());
}

function f2(callback) {
  setTimeout(() => {
    console.log(`Tempo ${rand()} F2`);
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(() => {
    console.log(`Tempo ${rand()} F3`);
    if (callback) callback();
  }, rand());
}

f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}
function f2Callback() {
  f3(f3Callback);
}
function f3Callback() {
  console.log("Olá mundo");
}

//Outra forma de criar
// f1(() => {
//   f2(() => {
//     f3(() => {
//       console.log("Olá mundo");
//     });
//   });
// });
