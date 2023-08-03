/**
 * void: É usado para indicar a ausência de um tipo, geralmente usado 
    como tipo de retorno de uma função que não retorna um valor.
 */

function semRetorno(...args: string[]): void {
  console.log(args.join(" "));
}

const pessoa = {
  nome: "Luiz",
  sobrenome: "Otávio",

  exibirNome(): void {
    console.log(this.nome + " " + this.sobrenome);
  },
};

semRetorno("Luiz", "Otávio");
pessoa.exibirNome();

export { pessoa };
