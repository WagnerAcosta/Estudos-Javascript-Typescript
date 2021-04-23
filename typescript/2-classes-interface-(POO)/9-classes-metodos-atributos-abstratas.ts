//Classe abstrata não pode ser instanciada
export abstract class Personagem {
  protected abstract emoji: string; //Atributos abstratos precisa ser implementado por subclasses

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(
      `${this.emoji} - ${this.nome} agora tem ${this.vida} de vida...`
    );
  }

  abstract bordao(): void; //Todos que extender personagem precisa implementar
}

export class Guerreira extends Personagem {
  protected emoji = "\u{1F9DD}";

  bordao(): void {
    console.log(this.emoji + " GUERREIRAA!");
  }
}

export class Monstro extends Personagem {
  protected emoji = "\u{1F9DF}";

  bordao(): void {
    console.log(this.emoji + " THANOS!!!!");
  }
}

const guerreira = new Guerreira("Guereira", 100, 1000);
const monstro = new Monstro("Thanos", 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);

monstro.atacar(guerreira);
monstro.atacar(guerreira);
