/**
 * readonly é usada para criar propriedades somente leitura em um objeto.
    ela só pode ser atribuída durante a criação do objeto ou em seu construtor.

 * '?' é usado para indicar que uma propriedade ou parâmetro é opcional. 
 */

const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: "Valor A",
  chaveB: "Valor B",
};

objetoA.chaveB = "Outro valor";
objetoA.chaveC = "Novo valor";
objetoA.novaChave = "Nova chave";

console.log(objetoA);
