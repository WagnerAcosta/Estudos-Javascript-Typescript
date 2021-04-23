export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

// const pessoa1 = new Pessoa("Wagner", 25);
// const pessoa2 = new Pessoa(["Wagner"], 25);
// const pessoa3 = new Pessoa(["Wagner"], { idade: 25 });
// const pessoa4 = new Pessoa<string, number>("Wagner", 25);

export class Pilha<T> {
  private contador = 0;
  private elemento: { [k: number]: T } = {};

  push(elemento: T) {
    this.elemento[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | string {
    if (this.isEmpty()) return "Pilha Vazia!";

    this.contador--;
    const deletar = this.elemento[this.contador];
    delete this.elemento[this.contador];
    return deletar;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }

  tamanho(): number {
    return this.contador;
  }

  mostraPilha() {
    for (const chave in this.elemento) {
      console.log(this.elemento[chave]);
    }
  }
}

const pilha = new Pilha<number | string>();

for (let i = 0; i < 5; i++) {
  pilha.push(i);
}

pilha.mostraPilha();

while (!pilha.isEmpty()) {
  console.log(pilha.pop());
}
