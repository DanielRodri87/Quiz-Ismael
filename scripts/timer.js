var perguntaSorteada = perguntas[Math.floor(Math.random() * perguntas.length)];
var resposta = perguntaSorteada.resposta;

document.getElementById("pergunta").innerHTML = perguntaSorteada.pergunta;
document.getElementById("ver-resposta").addEventListener("click", function(){
document.getElementById("resposta").innerHTML = resposta;
})

var segundos = 15;
var cronometro = setInterval(function(){
document.getElementById("cronometro").innerHTML = segundos;
segundos--;
if(segundos < 0){
    clearInterval(cronometro);

    window.close();
}
}, 1000);



document.getElementById("fechar").addEventListener("click", function(){
window.close();
})
