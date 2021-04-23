namespace MeuNamespace {
  export const nomeNamespace = "Wagner";

  export class PessoaNamespace {
    constructor(public nome: string) {}
  }

  export namespace NovoNamespace {
    export const nomeNamespace = "Novo Namespace";
  }
}

const pessoaName = new MeuNamespace.PessoaNamespace("Roberto");
console.log(pessoaName);
console.log(MeuNamespace.nomeNamespace);
console.log(MeuNamespace.NovoNamespace.nomeNamespace);

export default 1;
