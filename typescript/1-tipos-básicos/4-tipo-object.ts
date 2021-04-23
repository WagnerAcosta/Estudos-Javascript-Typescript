const objetoA: {
  readonly chaveA: string; //somente leitura
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown; //Utilizar quando você precisa criar mais objetos
} = {
  chaveA: "Valor A",
  chaveB: "Valor B",
};

objetoA.chaveB = "Outro valor";
objetoA.chaveC = "Novo valor";
objetoA.chaveD = "Nova chave";
+console.log(objetoA);

// Module mode
export default 1;
