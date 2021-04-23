function mostraHora() {
  let data = new Date();
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

//Executa a cada 1 segundo
const timer = setInterval(() => {
  console.log(mostraHora());
}, 1000);

//Para depois de 5 segundo
setTimeout(() => {
  clearInterval(timer);
}, 5000);
