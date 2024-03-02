let listaNumeros = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemDeInicio() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemDeInicio();


function verificarChute() {
  let chute = document.querySelector('input').value;
  
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Parabéns !');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTela = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p', mensagemTela);
    document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
    } else {
      exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
 let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
 let quantidadeElementos = listaNumeros.length;

if (quantidadeElementos == numeroLimite) {
  listaNumeros = [];
}

  if (listaNumeros.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaNumeros.push(numeroEscolhido);
    console.log(listaNumeros);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  tentativas = 1;
  limparCampo();
  numeroSecreto = gerarNumeroAleatorio();
  exibirMensagemDeInicio();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}