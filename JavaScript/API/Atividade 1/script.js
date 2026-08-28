const bola = document.getElementById("bola");
const goleiro = document.getElementById("goleiro");
const campo = document.querySelector(".campo");
const gol = document.querySelector(".gol");

const mensagem = document.getElementById("mensagem");

const golsTexto = document.getElementById("gols");
const chutesTexto = document.getElementById("chutes");

const botao = document.getElementById("reiniciar");

let gols = 0;
let chutes = 0;

let arrastando = false;
let offsetX = 0;
let offsetY = 0;



const POSICAO_INICIAL = {
    left: 610,
    top: 480
};




function voltarBola() {

    bola.style.transition = "all 0.4s ease";

    bola.style.left = POSICAO_INICIAL.left + "px";
    bola.style.top = POSICAO_INICIAL.top + "px";
}




bola.draggable = false;




bola.addEventListener("pointerdown", function(event) {

    if (botao.style.display === "inline-block") {
        return;
    }

    arrastando = true;

    bola.setPointerCapture(event.pointerId);

    const bolaRect = bola.getBoundingClientRect();

    offsetX = event.clientX - bolaRect.left;
    offsetY = event.clientY - bolaRect.top;

    bola.style.transition = "none";

    bola.style.cursor = "grabbing";
});


bola.addEventListener("pointermove", function(event) {

    if (!arrastando) {
        return;
    }

    const campoRect = campo.getBoundingClientRect();

    let x =
        event.clientX -
        campoRect.left -
        offsetX;

    let y =
        event.clientY -
        campoRect.top -
        offsetY;


    x = Math.max(
        0,
        Math.min(x, campo.clientWidth - bola.offsetWidth)
    );

    y = Math.max(
        0,
        Math.min(y, campo.clientHeight - bola.offsetHeight)
    );


    bola.style.left = x + "px";
    bola.style.top = y + "px";
});



bola.addEventListener("pointerup", function(event) {

    if (!arrastando) {
        return;
    }

    arrastando = false;

    bola.style.cursor = "grab";

    verificarChute();
});


function verificarChute() {

    const bolaRect = bola.getBoundingClientRect();
    const golRect = gol.getBoundingClientRect();

    chutes++;

    chutesTexto.textContent = chutes;


    const centroX =
        bolaRect.left + bolaRect.width / 2;

    const centroY =
        bolaRect.top + bolaRect.height / 2;


    const dentroDoGol =
        centroX >= golRect.left &&
        centroX <= golRect.right &&
        centroY >= golRect.top &&
        centroY <= golRect.bottom;



    if (!dentroDoGol) {

        mensagem.textContent =
            "⚽ Você chutou para fora!";

        voltarBola();

        botao.style.display = "inline-block";

        return;
    }


    let direcao;

    const limiteEsquerda =
        golRect.left + golRect.width * 0.33;

    const limiteDireita =
        golRect.left + golRect.width * 0.66;


    if (centroX < limiteEsquerda) {

        direcao = "esquerda";

    }

    else if (centroX > limiteDireita) {

        direcao = "direita";

    }

    else {

        direcao = "centro";
    }


    let altura;

    const limiteAlta =
        golRect.top + golRect.height * 0.40;

    const limiteBaixa =
        golRect.top + golRect.height * 0.70;


    if (centroY < limiteAlta) {

        altura = "alta";

    }

    else if (centroY > limiteBaixa) {

        altura = "baixa";

    }

    else {

        altura = "meio";
    }



    const lados = [
        "esquerda",
        "centro",
        "direita"
    ];

    const defesa =
        lados[Math.floor(Math.random() * lados.length)];



    const alturaDefesa =
        Math.random() < 0.5
            ? "alta"
            : "baixa";



    moverGoleiro(
        defesa,
        alturaDefesa,
        dentroDoGol
    );


    if (direcao === defesa) {

        mensagem.textContent =
            "🧤 DEFENDEU! O goleiro pegou!";


        pegarBola(
            defesa,
            alturaDefesa
        );

    }



    else {

        gols++;

        golsTexto.textContent = gols;

        mensagem.textContent =
            "⚽ GOOOOOOOOL!";

        bola.style.transition =
            "all 0.7s ease";

        moverBolaParaGol(
            direcao,
            altura
        );
    }


    botao.style.display = "inline-block";
}



function moverGoleiro(
    lado,
    altura,
    dentroDoGol
) {

    let left;

    let top;


    if (lado === "esquerda") {

        left = 40;

    }

    else if (lado === "direita") {

        left = 420;

    }

    else {

        left = 235;
    }

    if (altura === "alta") {

        top = 35;

    }

    else {

        top = 105;
    }



    goleiro.style.left = left + "px";
    goleiro.style.top = top + "px";


    if (lado === "esquerda") {

        goleiro.style.transform =
            "rotate(-18deg)";

    }

    else if (lado === "direita") {

        goleiro.style.transform =
            "rotate(18deg)";

    }

    else {

        goleiro.style.transform =
            "rotate(0deg)";
    }
}


function pegarBola(
    lado,
    altura
) {

    setTimeout(function() {

        let x;
        let y;


        if (lado === "esquerda") {

            x = 185;

        }

        else if (lado === "direita") {

            x = 565;

        }

        else {

            x = 420;
        }


        if (altura === "alta") {

            y = 75;

        }

        else {

            y = 145;
        }


        bola.style.transition =
            "all 0.6s ease";


        bola.style.left =
            x + "px";

        bola.style.top =
            y + "px";


    }, 150);
}



function moverBolaParaGol(
    direcao,
    altura
) {

    let x;
    let y;


    if (direcao === "esquerda") {

        x = 180;

    }

    else if (direcao === "direita") {

        x = 560;

    }

    else {

        x = 420;
    }



    if (altura === "alta") {

        y = 60;

    }

    else if (altura === "baixa") {

        y = 190;

    }

    else {

        y = 120;
    }


    bola.style.left =
        x + "px";

    bola.style.top =
        y + "px";
}



botao.addEventListener("click", function() {

    voltarBola();


    goleiro.style.left =
        "235px";

    goleiro.style.top =
        "70px";

    goleiro.style.transform =
        "rotate(0deg)";


    mensagem.textContent =
        "Arraste a bola para o gol!";


    botao.style.display =
        "none";
});


voltarBola();