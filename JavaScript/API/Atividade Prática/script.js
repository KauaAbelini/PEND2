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