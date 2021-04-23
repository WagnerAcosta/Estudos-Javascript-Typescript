const marcas = ["bmw", "Ferrari", "Lamborghini"];
const carros = ["i320", "Enzo", "Huracan"];

const end = { rua: "11 de julho" };

const concessionaria = marcas.concat(carros, ["adicionar"]);

//...spread
const concessionariaCentro = [{ ...end }, ...marcas, ...carros, ["adiconar"]];

console.log(concessionaria);
console.log(concessionariaCentro);
