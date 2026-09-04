navigator.geolocation.getCurrentPosition(
    function (posicao) {
        console.log("Latitude:", posicao.coords.latitude);
        console.log("Longitude:", posicao.coords.longitude);
        console.log("Precisão:", posicao.coords.accuracy);
        document.getElementById("imagemCerto").style.display = "block";
    },
    function (erro) {
        document.getElementById("imagemErro").style.display = "block";
    }
);