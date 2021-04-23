//Never nunca retornar nada
export function criaErro(): never {
  throw new Error("Erro qualquer");
}

criaErro();

// Module mode
export default 1;
