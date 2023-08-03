//É um tipo de dados mais seguro

let x: unknown;

x = 100;
x = "Luiz";
x = 900;
x = 10;
const y = 800;

if (typeof x === "number") console.log(x + y);


//exemplo 2
let valor: any = 10;
valor = "Olá mundo";
valor.toUpperCase(); // Não há erros de compilação

let valorDesconhecido: unknown = 10;
valorDesconhecido = "Olá mundo";
//valorDesconhecido.toUpperCase(); // Erro de compilação: Property 'toUpperCase' does not exist on type 'unknown'