class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }
  //Método de instância
  aumentarVolume() {
    this.volume += 4;
  }
  diminuirVolume() {
    this.volume -= 4;
  }

  //Método estático
  static trocaPilha() {
    console.log(`Ok, vou trocar`);
  }
}

const controle = new ControleRemoto("LG");
controle.aumentarVolume();
console.log(controle);

ControleRemoto.trocaPilha(); //Não precisa instanciar e também não acessa atributos
