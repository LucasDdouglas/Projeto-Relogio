

const imagem = window.document.getElementById('imagem')

function relogio() {

    var data = new Date();
    var hor = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    if (hor < 10) {
        hor = "0" + hor;

    }
    if (min < 10) {
        min = "0" + min;
    }
    if (seg < 10) {
        seg = "0" + seg;
    }


    if (hor >= 00 && hor < 12) {

        imagem.src = "assets/tarde.jpg"
        document.body.style.backgroundImage = 'url("assets/manhã.jpg")'
    }
    else if (hor >= 12 && hor < 18) {

        imagem.src = "assets/noite.jpg"
        document.body.style.backgroundImage = 'url("assets/tarde.jpg")'
    }

    else {
        imagem.src = "assets/manhã.jpg"
        document.body.style.backgroundImage = 'url("assets/noite.jpg")'

    }

    let horas = hor + ":" + min + ":" + seg;

    document.getElementById('rel').value = horas;
}

let timer = setInterval(relogio, 1000);

