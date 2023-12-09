// declaramos variable
var imagenes =
    [
        "1.jpg", "1.jpg", "2.jpg", "2.jpg",
        "3.jpg", "3.jpg", "4.jpg", "4.jpg",
        "5.jpg", "5.jpg", "6.jpg", "6.jpg",
        "7.jpg", "7.jpg", "8.jpg", "8.jpg"
    ];

function cambiar(img, i) {
    document.getElementById(img.id).src = "./img/p3/" + imagenes[i];
}

function Shufflear() {
    for (let i = 0; i < imagenes.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [imagenes[i], imagenes[j]] = [imagenes[j], imagenes[i]]
    }
}

function cambiarboton(boton) {
    if (boton.value == "Mostrar ayuda") {
        boton.value = "Ocultar ayuda";
        for (let i = 1; i < 5; i++) {
            document.getElementById("r" + i).style.display = "table-row";

        }
        for (let i = 1; i <= imagenes.length; i++) {
            document.getElementById("t" + i).innerHTML = imagenes[i - 1];

        }
    } else {
        boton.value = "Mostrar ayuda";
        for (let i = 1; i < 5; i++) {
            document.getElementById("r" + i).style.display = "none";

        }
        for (let i = 1; i <= imagenes.length; i++) {
            document.getElementById("t" + i).innerHTML = "";

        }
    }
}

