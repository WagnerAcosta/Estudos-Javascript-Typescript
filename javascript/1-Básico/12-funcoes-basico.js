function saudacao(nome) {
    return `Bom dia ${nome}`;
}
const retorno = saudacao('Wagner')
console.log(retorno);


function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
    console.log('Olá');//Finaliza no return
}
console.log(soma(3, 9))
console.log(soma(4))


//Função anonima
const raiz = function (n) {
    return n ** 0.5;
}
console.log(raiz(9));

//Arrow function
const multi = (n) => {
    return n * n;
}
console.log(multi(9));