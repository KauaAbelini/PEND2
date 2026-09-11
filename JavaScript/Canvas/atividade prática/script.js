const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

contexto.lineWidth = 14;
contexto.lineCap = "round";
contexto.lineJoin = "round";

let tempo = 0;

function desenhar() {

    contexto.clearRect(0, 0, canvas.width, canvas.height);

    contexto.strokeStyle = "black";

    // cabeça
    contexto.beginPath();
    contexto.arc(260, 470, 30, 0, Math.PI * 2);
    contexto.stroke();

    // corpo
    contexto.beginPath();
    contexto.moveTo(250, 500);
    contexto.lineTo(250, 600);
    contexto.stroke();

    // braços
    contexto.beginPath();
    contexto.moveTo(250, 500);
    contexto.lineTo(200, 550);
    contexto.lineTo(255, 570);
    contexto.stroke();

    contexto.beginPath();
    contexto.moveTo(250, 500);
    contexto.lineTo(300, 550);
    contexto.lineTo(330, 530);
    contexto.stroke();

    // pernas
    contexto.beginPath();
    contexto.moveTo(250, 600);
    contexto.lineTo(200, 650);
    contexto.lineTo(200, 750);
    contexto.stroke();

    contexto.beginPath();
    contexto.moveTo(250, 600);
    contexto.lineTo(300, 650);
    contexto.lineTo(300, 750);
    contexto.stroke();

    tempo += 0.04;

    let golpe = Math.sin(tempo);
    let x = 520 - golpe * 25;

    contexto.strokeStyle = "red";

    // cabeça
    contexto.beginPath();
    contexto.arc(x, 470, 30, 0, Math.PI * 2);
    contexto.stroke();

    // corpo
    contexto.beginPath();
    contexto.moveTo(x, 500);
    contexto.lineTo(x, 600);
    contexto.stroke();

    // Braço de trás
    contexto.beginPath();
    contexto.moveTo(x, 500);
    contexto.lineTo(x - 50, 550);
    contexto.lineTo(x - 80, 530);
    contexto.stroke();

    let bracoX = x + 50 + golpe * 55;
    let bracoY = 550 - golpe * 25;

    contexto.beginPath();

    contexto.moveTo(x, 500);

    contexto.lineTo(
        x + 35 + golpe * 35,
        525 - golpe * 20
    );

    contexto.lineTo(
        bracoX,
        bracoY
    );

    contexto.stroke();
    contexto.beginPath();
    contexto.moveTo(x, 600);
    contexto.lineTo(x + 50, 650);
    contexto.lineTo(x + 50, 750);
    contexto.stroke();
    contexto.beginPath();
    contexto.moveTo(x, 600);
    contexto.lineTo(x - 50, 650);
    contexto.lineTo(x - 50, 750);
    contexto.stroke();

    requestAnimationFrame(desenhar);
}

desenhar();