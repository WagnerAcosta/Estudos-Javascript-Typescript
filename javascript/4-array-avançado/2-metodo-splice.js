//splice(indice atual, quantidade delete, ...elementos)
//               -6        -5          -4          -3       -2     -1
//                0         1           2           3       4       5
const carros = ["BMW", "Ferrari", "Lamborghini", "HB20", "ix35", "S10"];

//Remove o elemente indice 3 e adiciona mercedes
const remove = carros.splice(3, 1, "Mercedes");
console.log('exemplo 1: ' + remove);


//Simulando pop => Removendo ultimo elemento
const remove1 = carros.splice(-1, 1);
console.log('exemplo 2: ' + remove1);


//Simulando shift => Removendo 1° elemento
const remove2 = carros.splice(0, 1);
console.log('exemplo 3: ' + remove2);


//Simulando push => Adicionando no final do array
const remove3 = carros.splice(carros.length, 0, "Land Rover");
console.log(carros, remove3);


//Simulando unshift => Adicionando no inicio do array
const remove4 = carros.splice(0, 0, "Paganni");
console.log(carros, remove4);
