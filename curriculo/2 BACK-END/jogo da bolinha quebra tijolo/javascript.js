
var canvas = document.getElementById("gamesCanvas");
var desenho = canvas.getContext("2d");


var raqueteAltura = 10;
var raqueteLargura = 90;
var raqueteX = (canvas.width - raqueteLargura) / 2; //centralizar raquete
var velocidadeRaquete =  11;

var bolaRadius = 10;
var bolaX = canvas.width / 2;
var bolaY = canvas.height - 20;
var bolaDX = 5;
var bolaDY = -3;

var tijolosPorLinha = 4;
var tijolosPorColuna = 7;
var tijoloLargura = 75;
var tijoloAltura = 20;
var tijoloEspacamento = 10;
var espacamentoSuperiorQuadro = 30;
var espacamentoEsquerdoQuadro = 30;
var tijolos = []; //lista com os tijolos

var totalPontuaçao = tijolosPorLinha * tijolosPorColuna * 10;
var pontuaçao = 0;

function facil (){
    raqueteLargura = 90;
    tijolosPorLinha = 2;
    tijolosPorColuna= 5;
    tijoloAltura = 40;
    tijoloLargura = 90;
    bolaRadius = 20;
    bolaDX = 2;
    bolaDY = -1;
    totalPontuaçao = tijolosPorLinha * tijolosPorColuna * 10;
    pontuaçao = 0;
    iniciarTijolos();
}

function medio (){
    raqueteLargura = 70;
    tijolosPorLinha = 4;
    tijolosPorColuna= 8;
    tijoloAltura = 30;
    tijoloLargura = 75;
    bolaRadius = 10;
    bolaDX = 4;
    bolaDY = -1;
    totalPontuaçao = tijolosPorLinha * tijolosPorColuna * 20;
    pontuaçao = 0; 
    iniciarTijolos();
}
function dificil (){
    raqueteLargura = 50;
    tijolosPorLinha = 5;
    tijolosPorColuna= 10;
    tijoloAltura = 18;
    tijoloLargura = 75;
    bolaRadius = 10;
    bolaDX = 30;
    bolaDY = -18;
    totalPontuaçao = tijolosPorLinha * tijolosPorColuna * 80;
    pontuaçao = 0; 
    iniciarTijolos();
}
function impossivel (){
    raqueteLargura = 20;
    tijolosPorLinha =25;
    tijolosPorColuna= 60;
    tijoloAltura = 3;
    tijoloLargura = 5;
    bolaRadius = 13;
    bolaDX = 17;
    bolaDY = -7;
    totalPontuaçao = tijolosPorLinha * tijolosPorColuna * 200;
    pontuaçao = 20; 
    iniciarTijolos();
}

function iniciarTijolos(){


//dedicado apena a inicialização dos tijolos
for (var coluna = 0; coluna < tijolosPorColuna; coluna++) {
    tijolos[coluna] = []  //0 1 2 3 4 5

    for (var linha = 0; linha < tijolosPorLinha; linha++) {

        tijolos[coluna][linha] = { x: 5, y: 5, ativo: 1 }
        //x é a posição esquerda/direita no canva
        //y é a posição acima/abaixo no canva
        //ativo, determina se o tijolo aparece ou não, 1 ou 0
    }
}

}
iniciarTijolos();

var setaDireita = false;
var setaEsquerda = false;
 8

document.addEventListener("keydown", descerDaTecla);
document.addEventListener("keyup", subirDaTecla);

function descerDaTecla(tecla) {
    if (tecla.key === "Right" || tecla.key === "ArrowRight") {
        setaDireita = true;

    }
    else if (tecla.key === "Left" || tecla.key === "ArrowLeft") {
        setaEsquerda = true;
    }
}

function subirDaTecla(tecla) {
    if (tecla.key === "Right" || tecla.key === "ArrowRight") {
        setaDireita = false;

    }
    else if (tecla.key === "Left" || tecla.key === "ArrowLeft") {
        setaEsquerda = false;
    }

}

function desenharRaquete() {
    desenho.beginPath();
    desenho.rect(raqueteX, canvas.height - raqueteAltura, raqueteLargura, raqueteAltura);
    desenho.fillStyle = "blue";
    desenho.fill();
    desenho.closePath();

}

function desenharBola() {
    desenho.beginPath()
    desenho.arc(bolaX, bolaY, bolaRadius, 0, Math.PI * 2);
    desenho.fillStyle = "red";
    desenho.fill();
    desenho.closePath();
}


function desenharTijolos() {
    for (var coluna = 0; coluna < tijolosPorColuna; coluna++) {
        for (var linha = 0; linha < tijolosPorLinha; linha++) {

            if (tijolos[coluna][linha].ativo == 1) { //verifica se tijolo está ativo para desenha-lo

                var tijoloX = (coluna * (tijoloLargura + tijoloEspacamento) + espacamentoEsquerdoQuadro);
                var tijoloY = (linha * (tijoloAltura + tijoloEspacamento) + espacamentoSuperiorQuadro);

                tijolos[coluna][linha].x = tijoloX;
                tijolos[coluna][linha].y = tijoloY;

                desenho.beginPath();
                desenho.rect(tijoloX, tijoloY, tijoloLargura, tijoloAltura);
                desenho.fillStyle = "green";
                desenho.fill();
                desenho.closePath();
            }
        }
    }
}
function detectarColisao() {
    for (var coluna = 0; coluna < tijolosPorColuna; coluna++) {
        for (var linha = 0; linha < tijolosPorLinha; linha++) {

            var tijolo = tijolos[coluna][linha];

            if (tijolo.ativo === 1){

                if (bolaX + bolaRadius > tijolo.x
                    && bolaX - bolaRadius < tijolo.x + tijoloLargura
                    && bolaY + bolaRadius > tijolo.y
                    && bolaY - bolaRadius < tijolo.y + tijoloAltura) {
                    bolaDY = -bolaDY;
                    tijolo.ativo = 0;
                    tela = document.getElementById("ponto");
                    pontuaçao = pontuaçao + 10;
                    tela.innerHTML = "Score" + pontuaçao;
                    gerarEfeitoSonoro('moeda.mp3');

                    if(pontuaçao === totalPontuaçao){
                        vitoria();
                    }

                }
            }
        }

    }
}

 
function gameover(){
    var gameover = document.getElementById("gameover");
    gameover.style.display = "block";
    gerarEfeitoSonoro('gameover.mp3');

}

function reiniciar(){
  document.location.reload();
}

function vitoria(){
    var mensagem = document.getElementById("vitoria");
    mensagem.style.display = "block";
    gerarEfeitoSonoro('win.mp3');
    bolaX = 0;
    bolaY = 0;
}

function gerarEfeitoSonoro(som){
    var contexto = new (window.AudioContext)(); 

    var requisicao = new XMLHttpRequest();
    requisicao.open('GET',som,true);
    requisicao.responseType = 'arraybuffer';

    requisicao.onload = function(){
        contexto.decodeAudioData(requisicao.response, function(buffer) { 
            var fonte = contexto.createBufferSource();
            fonte.buffer = buffer;

            fonte.connect(contexto.destination);
            fonte.start(0);
        });

    }

    requisicao.send();
       
   
} 

function desenhar() {
    desenho.clearRect(0, 0, canvas.width, canvas.height); //limpa o frame anterior
    desenharRaquete();
    desenharBola();
    desenharTijolos();
    detectarColisao();



    //analisar colisao eixo X, colisao canto direita/esquerdo
    if (bolaX + bolaDX > canvas.width - bolaRadius || bolaX + bolaDX < bolaRadius) {
        gerarEfeitoSonoro('parede.mp3');
        bolaDX = - bolaDX; //inverte direcao direita/esquerda
    }
    //analisa colisao com parte de cima
    if (bolaY + bolaDY < bolaRadius) {

        bolaDY = -bolaDY; //inverte colisao ao bater em cima

    } else if (bolaY + bolaDY > canvas.height - bolaRadius - raqueteAltura) {

        //se for maior que o começo da raquete e menor que o final da raquete
        if (bolaX > raqueteX && bolaX < raqueteX + raqueteLargura) {
            gerarEfeitoSonoro('raquete.mp3');

            bolaDY = -bolaDY;           //inverte direção
        } else {

            gameover(); //reinicia
        }
    }



    //se setaDireita estiver ativo &&"e" raqueteX < largura dp canvas - raqueteLargura
    if (setaDireita === true && raqueteX < canvas.width - raqueteLargura) {
        raqueteX = raqueteX + velocidadeRaquete;    //anda para direita

        //se setaEsquerda estiver ativo &&"e" raqueteX > 0"começo do canvas"
    } else if (setaEsquerda === true && raqueteX > 0) {
        raqueteX = raqueteX - velocidadeRaquete;    //anda para esquerda
    }

    bolaX = bolaX + bolaDX; // faz bola andar para direita/esquerda
    bolaY = bolaY + bolaDY; // faz a bola andar para cima/baixo





    requestAnimationFrame(desenhar) //atualizar tela de forma suave
}
desenhar(); //chama função desenhar
 