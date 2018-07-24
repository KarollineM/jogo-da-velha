let inputNome = document.querySelector('#input-nome');
let inputEmail = document.querySelector('#input-email');
let inputMensagem = document.querySelector('#input-mensagem');
let botao = document.querySelector('button');
let caixa = document.querySelector('div');

botao.addEventListener('click', function(){
    caixa.innerHTML = `
    <p>Nome: ${inputNome.value}</p>
    <p>Email: ${inputEmail.value}</p>
    <p>Mensagem: ${inputMensagem.value}</p>`;
});