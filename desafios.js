function exibirOla() {
    console.log('Hello word!');
    
}
exibirOla();


function exibirNome(nome) {
    console.log(`Olá, ${nome}!`);
}
exibirNome('Luiz'); 


function calcularDobro(numero) {
    return numero * 2;
}
let resultadoDobro = calcularDobro(2);
console.log(resultadoDobro);


function calculaMedia(a, b, c) {
    return (a + b + c) / 3;
}
let media = calculaMedia(4, 7, 10);
console.log(media)


function encontraMaiorNumero(a, b) {
    return a > b ? a : b;
}
let maiorNumero = encontraMaiorNumero(15, 9);
console.log(maiorNumero);


function quadrado(numero) {
    return numero * numero;
}
let resultado = quadrado(2);
console.log(resultado);