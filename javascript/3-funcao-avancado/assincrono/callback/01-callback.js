// variável global

// função genérica logStuff que imprimi no console
function logStuff(userData) {
  if (typeof userData === "string") {
    console.log(userData);
  } else if (typeof userData === "object") {
    for (var item in userData) {
      console.log(item + ": " + userData[item]);
    }
  }
}

// Uma função que pega 2 parâmetros, o último uma função callback
function getInput(options, callback) {
  const allUserData = [];
  allUserData.push(options);
  callback(options);
}

// Quando nós chamamos a função getInput, nós passamos
// logStuff como um parâmetro. Então logStuff vai ser
// a função que será chamada de volta (ou executada)
// dentro da função getInput
getInput({ name: "Rich", speciality: "JavaScript" }, logStuff);
// name: Rich
// speciality: JavaScript
