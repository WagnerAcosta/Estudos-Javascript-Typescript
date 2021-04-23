type Veiculo = {
  marca: string;
  ano: number;
};

type Car = {
  brand: Veiculo["marca"]; //Está com tipo Veiculo
  year: Veiculo["ano"]; //Está com tipo Veiculo
  name: string;
};

const carro1: Car = {
  brand: "Ford",
  year: 2020,
  name: "Nome",
};

const carro2: Veiculo = {
  marca: "Ford",
  ano: 2020,
};

console.log(carro1);
console.log(carro2);
