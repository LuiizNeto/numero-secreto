

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}  

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let numeroSecreto = gerarNumeroAleatorio();
    const meuInputHtml = document.getElementById('entrada');
    let chute = meuInputHtml.value;
    console.log(numeroSecreto);
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', 'Você descobriu o número secreto!');
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor.');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
    }
    meuInputHtml.value = null;
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}