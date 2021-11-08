
function validar() {

    //validando campo nombre y apellido
    var nombre = document.formulario.nombre.value.trim();
    if (!nombre || nombre.length < 7) {
        alert("Debe ingresar un nombre y apellido.");
        return false;
    }

    //validando campo email
    var mail = document.formulario.mail.value;
    if (mail.length < 8) {
        alert("Debe ingresar un correo válido");
        return false;
    }

    //validando radio de regularidad
    var cont = 0;
    var regularidad = document.formulario.regularidad;

    for (i = 0; i < regularidad.length; i++) {
        if (regularidad[i].checked) {
            cont++;
        }
    }

    if (cont == 0) {
        alert("Debe elegir la regularidad");
        return false;
    }
}