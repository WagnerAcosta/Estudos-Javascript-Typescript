/** Factory function (Função fábrica) é um gerador de objetos.
 
 *  Em JavaScript, qualquer função pode retornar um objeto. 
    Mas, quando isso acontece sem o new, é uma função de fábrica.

 *  Getters e setters são usados para proteger seus dados, 
    especialmente na criação de classes. Para cada instância 
    de variável, um método getter retorna seu valor, enquanto 
    um método setter o define ou atualiza.

 * O this referencia o objeto criado
 */

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    altura,
    peso,

    fala(assunto = 'sem assunto') {
      return `${nome} está ${assunto}`;
    },

    imc() {
      const i = this.peso / this.altura ** 2;
      return i.toFixed(2);
    },

    //Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    //Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },
  };
}

const p1 = criaPessoa("Wagner", "Duarte", 1.72, 62);
console.log(p1.fala("falando em JAVA"));
console.log(p1.imc());

p1.nomeCompleto = "Maria Eduarda Duarte";
console.log('\n' + p1.nomeCompleto); //Finge não ser uma função
console.log(p1)