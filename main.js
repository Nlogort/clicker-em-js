//======================================================
// 1. ESTADO DO JOGADOR(Dados de progresso) //
//======================================================
let score = parseInt(localStorage.getItem('pontos')) || 0;
let peixesPorClique = parseInt(localStorage.getItem('peixeClique')) || 1;
let pontosAutomaticos = 0;
//======================================================
// 2. LOJA/PREÇOS (Custo das melhorias)
//======================================================
let pontoDobrado = parseInt(localStorage.getItem('pontoAutomatico')) || 100; // preço do ajudante automatico
let custoDobraPesca = parseInt(localStorage.getItem('pontoDuplo')) || 50; // preço clique dobrado

//======================================================
// 3. AÇÕES DO JOGO (Funções)
//======================================================
function pontos() {
    score = score + peixesPorClique;
    document.getElementById('moedas').innerText = score;
    salvarJogo();
}
function upgrade() {
    if (score >= pontoDobrado
    ) {
        score = score - pontoDobrado;
        pontosAutomaticos = pontosAutomaticos + 2;
        pontoDobrado = pontoDobrado * 2;
        document.getElementById('moedas').innerText = score;
        document.getElementById('autoClicker').innerText = pontoDobrado;
        salvarJogo();
    } else {
        mostrarAviso(`Você precisa de ${pontoDobrado} pontos para comprar`)
    }

}
function pontosPorPesca() {
    if (score >= custoDobraPesca) {
        score = score - custoDobraPesca;
        peixesPorClique = peixesPorClique * 2;
        custoDobraPesca = custoDobraPesca * 3;
        document.getElementById('moedas').innerText = score;
        document.getElementById('ClickDobrado').innerText = custoDobraPesca;
        salvarJogo();
    } else {
        mostrarAviso(`Você precisa de ${custoDobraPesca} pontos para comprar`);//literalmento o alerta chama a função la de baixo e so funciona se o ANIMAL DO USUARIO NÃO TIVER DINHEIRO E CLICAR NO BOTAO

    }

}


function rodarTempo() {
    score = score + pontosAutomaticos;
    document.getElementById('moedas').innerText = score;
}
setInterval(rodarTempo, 1000);

function salvarJogo() {
    localStorage.setItem('pontos', score);
    localStorage.setItem('peixeClique', peixesPorClique);
    localStorage.setItem('pontoAutomatico', pontosAutomaticos);
    localStorage.setItem('pontoAutomatico', pontoDobrado);
    localStorage.setItem('pontoDuplo', custoDobraPesca);
}
// Linha solta no final do arquivo main.js para atualizar o placar assim que a página abre:
document.getElementById('moedas').innerText = score;
document.getElementById('autoClicker').innerText = pontoDobrado;
document.getElementById('ClickDobrado').innerText = custoDobraPesca;

function mostrarAviso(mensagem) { // função que cria o motor que e chamado nos 2 else
    const caixa = document.getElementById('caixaAviso'); //define a "caixa" ou seja a div do html como constante(voce vai entender eu acho ;p)
    document.getElementById('textoAviso').innerText = mensagem; //define que a mensagem colocada na caixa de aviso seja aescrita
    caixa.className = 'avisoVisivel';//chama a classe que e visivel
    setTimeout(function () {
        caixa.className = 'avisoEscondido'; // mostra durante um pouco de tempo a caixa de aviso
    }, 2500);
}

function chamarReset() {
    const reiniciar = document.getElementById('CaixaReset');
    reiniciar.className = 'resetVisivel'



}
document.getElementById('botaoConfirma').addEventListener('click', function () {
    localStorage.clear();  //limpa tudo ja salvo
    location.reload();//atualiza para a pagina iniciar

})


const botaoCancelar = document.getElementById('CaixaReset');
botaoCancelar.addEventListener('click', function () {
    botaoCancelar.className = 'resetEscondido'
})
