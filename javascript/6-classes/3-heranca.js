class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} foi ligado!`);
      return;
    }
    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} foi desligado!`);
      return;
    }
    this.ligado = false;
  }
}

//-------------Nova Classe-----------------

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome); //Super para chamar atributos pai
    this.cor = cor;
    this.modelo = modelo;
  }
}

const j4 = new Smartphone("Samsung", "Azul", "J4");
console.log(j4);

//--------------Nova Classe----------------

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }

  ligar() {
    console.log(`Sobreescrevi o metodo PAI`);
  }
}
const tab = new Tablet("iPad", true);
console.log(tab);
