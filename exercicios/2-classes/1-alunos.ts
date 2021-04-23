/**
 * Escreva uma classe cujos objetos representam alunos matriculados em uma disciplina. Cada objeto
   dessa classe deve guardar os seguintes dados do aluno: matrícula, nome, 2 notas de prova e 1 nota de
   trabalho. Escreva os seguintes métodos para esta classe:
    Media() calcula a média final do aluno (cada prova tem peso 2,5 e o trabalho tem peso 2)
    Final() calcula quanto o aluno precisa para a prova final (retorna zero se ele não for para a final)
 */
class Alunos {
  constructor(
    private matricula: number,
    private nome: string,
    private n1: number = 0,
    private n2: number = 0,
    private trabalho: number = 0
  ) {}

  private media() {
    return this.n1 / 2.5 + this.n2 / 2.5 + this.trabalho / 5;
  }

  private final() {
    if (this.media() >= 7) return "Aluno aprovado *_*";
    else if (this.media() < 7 && this.media() >= 3)
      return `Exame falta ${10 - this.media()}`;
    else return "Aluno reprovado :c";
  }

  toString() {
    console.log(
      `\nMatricula: ${this.matricula}\nNome: ${
        this.nome
      }\nMedia: ${this.media()}\n${this.final()}`
    );
  }
}

const aluno1 = new Alunos(1, "Wagner", 7, 3, 7);
aluno1.toString();

const aluno2 = new Alunos(2, "Gabriel", 9, 8, 8);
aluno2.toString();

const aluno3 = new Alunos(3, "Pedro", 3, 3, 2);
aluno3.toString();
