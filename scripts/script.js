document.addEventListener('DOMContentLoaded', function(){
    var botaoP = document.getElementById('botaoP');
    botaoP.addEventListener('click', abrirPagina);

    function abrirPagina(){
        window.open('pergunta.html');
    }
});

var questao = [
    {
        questao: "O que é risco?",
        opcao: ["É a probabilidade de um evento ocorrer", "É a probabilidade de um evento não ocorrer", "É a probabilidade de um evento ocorrer ou não ocorrer", "É a probabilidade de um evento não ocorrer ou ocorrer"],
        resposta: "É a probabilidade de um evento ocorrer"
    },
    {
        questão: "Quem é Francinaldo?",
        opcao: ["É o cara", "É um estudante", "É um dev"],
        resposta: "É o cara"
    }
]

var questaoAtual = -1;

function proximaQuestao(){
    questaoAtual++;

    if(questaoAtual >= questao.lengtg){
        displayQuestao();
    }
    else{
        alert("Fim do Quiz");
    }
}

function displayQuestao(){
    var questaoCont = document.getElementById("questao");
    var opcaoCont = document.getElementById("opcao");

    questaoCont.innerHTML = questao[questaoAtual].questao;
    opcaoCont.innerHTML = "";

    questoes[questaoAtual].opcao.forEach(function(opcao, index){
        var opcaoBotao = document.createElement("button");
        opcaoBotao.innerHTML = opcao;
        opcaoBotao.onclick = function(){
            verificarResposta(opcao == questoes[questaoAtual].resposta);
        }
        opcaoCont.appendChild(opcaoBotao);
    });
    
}