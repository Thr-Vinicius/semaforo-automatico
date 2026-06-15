const semaforoImg = document.getElementById('semaforo-img');

const fasesSemaforo = [
 "img/vermelho.png",
 "img/verde.png",
 "img/amarelo.png"
];

let indiceAtual = 0;

function trocarSinal() {
 indiceAtual++;
 
 if (indiceAtual >= fasesSemaforo.length) {
 indiceAtual = 0;
 }
 semaforoImg.src = fasesSemaforo[indiceAtual];
}

setInterval(trocarSinal, 3000);

