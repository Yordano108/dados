function lanzar() {
    const numeroRandom = Math.floor(Math.random() * 6) + 1;

    const dadoImg = document.getElementById("imagenDado");

    dadoImg.src = `dado${numeroRandom}.png`;

    const mensaje = document.getElementById("mensaje");

    mensaje.innerText = `¡Salió el ${numeroRandom}!`;
}
