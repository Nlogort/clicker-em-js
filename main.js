//======================================================
// 1. ESTADO DO JOGADOR(Dados de progresso) //
//======================================================
let score = 0;
let peixesPorClique = 1;
let pontosAutomaticos = 0;
//======================================================
// 2. LOJA/PREÇOS (Custo das melhorias)
//======================================================
let pontoDobrado = 100; // preço do ajudante automatico
let custoDobraPesca = 50; // preço clique dobrado

//======================================================
// 3. AÇÕES DO JOGO (Funções)
//======================================================
function pontos() {
    score = score + 1;
    document.getElementById('moedas').innerText = score;
}
function upgrade() {
    if (score >= pontoDobrado
    ) {
        score = score - pontoDobrado;
        pontosAutomaticos = pontosAutomaticos + 1;
        pontoDobrado = pontoDobrado * 2;
        document.getElementById('moedas').innerText = score;
        document.getElementById('autoClicker').innerText = pontoDobrado;

    } else {
        alert("Você preisa de " + pontoDobrado
            + " pontos pra comprar")
    }

    function pontosPorPesca() {
        if (score >= custoDobraPesca) {
            score = score - custoDobraPesca;
            peixesPorClique=peixesPorClique*2;
            custoDobraPesca=custoDobraPesca*3
             document.getElementById('moedas').innerText = score;
            document.getElementById('ClickDobrado').innerText= custoDobraPesca;
    }else{
        alert(`voce precisa de ${custoDobraPesca} para comprar`)
    }
    }

}
function rodarTempo() {
    score = score + pontosAutomaticos;
    document.getElementById('moedas').innerText = score;
}
setInterval(rodarTempo, 1000);

