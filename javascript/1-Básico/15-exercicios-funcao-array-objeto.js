function cadastraDados() {
  const form = document.querySelector(".form");
  const result = document.querySelector(".resultado");

  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = document.querySelector(".nome");
    const sobrenome = document.querySelector(".sobrenome");
    const peso = document.querySelector(".peso");
    const altura = document.querySelector(".altura");

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });

    result.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
  }
  form.addEventListener("submit", recebeEventoForm);
}
cadastraDados();
