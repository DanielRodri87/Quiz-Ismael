document.addEventListener('DOMContentLoaded', function(){
    var botaoP = document.getElementById('botaoP');
    botaoP.addEventListener('click', abrirPagina);

    function abrirPagina(){
        window.open('pergunta.html');
    }
});

