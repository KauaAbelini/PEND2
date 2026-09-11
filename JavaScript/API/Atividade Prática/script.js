function registrarPonto() {
    navigator.geolocation.getCurrentPosition(
        
        function (posicao) {
            document.getElementById("latitude").innerText =
                posicao.coords.latitude;

            document.getElementById("longitude").innerText =
                posicao.coords.longitude;

            document.getElementById("precisao").innerText =
                posicao.coords.accuracy + " metros";

            document.getElementById("imagemErro").style.display = "none";

            document.getElementById("mensagem").innerText =
                "Ponto registrado com sucesso!";
        },

        function (erro) {

            document.getElementById("imagemErro").style.display = "block";

            document.getElementById("mensagem").innerText =
                "Não foi possível obter sua localização.";
        },

        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}

//================================= CAMERA ====================================//

navigator.mediaDevices.getUserMedia({
    video: true, audio: false
})
.then(function(stream) {
    const video = document.querySelector("#camera");
    video.srcObject = stream;
})
.catch(function(error) {
    console.error("Erro ao acessar a câmera:", error);
});

//================================ FOTO =======================================//
const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");
const botao = document.querySelector("#botao");
const foto = document.querySelector("#foto");

botao.addEventListener("click", function() {
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;

    contexto.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );

    foto.src = canvas.toDataURL("image/png");
});