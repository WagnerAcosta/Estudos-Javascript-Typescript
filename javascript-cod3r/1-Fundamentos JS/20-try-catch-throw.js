function tratarError(error) {
  throw "função mensagem de erro!";
}

function imprimir(obj) {
  try {
    // console.log(obj.name.toUpperCase()); error
    console.log(obj.nome.toUpperCase());
  } catch (error) {
    tratarError(error);
  } finally {
    console.log("Sempre vou executar!");
  }
}

imprimir({ nome: "wagner" });
