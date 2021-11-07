var imagenes = document.getElementsByClassName("imagen");
var i = 0;

function previa() {

    if (i == 0) {

        imagenes[i].classList.toggle("oculta");
        i = 9;
        imagenes[i].classList.toggle("oculta");
    } else {

        imagenes[i].classList.toggle("oculta");
        --i;
        imagenes[i].classList.toggle("oculta");
    }

}

function siguiente() {

    if (i == 9) {

        imagenes[i].classList.toggle("oculta");
        i = 0;
        imagenes[i].classList.toggle("oculta");

    } else {

        imagenes[i].classList.toggle("oculta");
        ++i;
        imagenes[i].classList.toggle("oculta");
    }
}