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
        alert("Você preisa de " + pontoDobrado
            + " pontos pra comprar")
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
        alert(`voce precisa de ${custoDobraPesca} para comprar`)
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
