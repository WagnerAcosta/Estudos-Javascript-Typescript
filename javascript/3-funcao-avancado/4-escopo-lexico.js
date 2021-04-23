const nome = "wagner";

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = "viviane"; //Não altera o valor da funcão falaNome
  falaNome();
}

usaFalaNome();
