/**
 * As declarações try... catch marcam um bloco de declarações para testar (try), 
    e especifica uma resposta, caso uma exceção seja lançada.
 */

function tratarError(error) {
  throw "error: função mensagem de erro!";
}

function imprimir(obj) {
  try {
    // console.log(obj.name.toUpperCase()); error
    console.log(obj.nome.toUpperCase());
  } catch (error) {
    tratarError(error);
  } finally {
    console.log("finally: sempre vou executar!");
  }
}

imprimir({ nome: "wagner" });
