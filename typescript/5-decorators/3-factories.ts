function inverteNomeCor(params1: string, params2: string) {
  //Function anonym
  return <T extends new (...args: any[]) => any>(target: T): T => {
    console.log("Sou Decorator", target);

    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(valor: string) {
        return (
          valor.split("").reverse().join("") + " " + params1 + " " + params2
        );
      }
    };
  };
}
//Recebendo parametros no decorator
@inverteNomeCor("p1", "p2")
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log("Sou classe");
  }
}

const animal = new Animal("Vaca", "Malhada");
console.log(animal);
