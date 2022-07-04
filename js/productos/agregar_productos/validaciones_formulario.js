var btn_agregar = document.querySelector(".btn_formulario_agregar_producto");

btn_agregar.addEventListener("click", function(event) {
    event.preventDefault();

    if (cajas()) {
        limpiar__cajas();
        alert("Datos enviados");

    } else {
        alert("Complete el contenido correctamente");
    }

});

function cajas() {
    let bandera = true;
    let cajas = document.querySelectorAll(".input__caja");

    for (let i = 0; i < cajas.length; i++) {
        if (validacionCadena(cajas[i].value)) {
            cajas[i].classList.remove("error_contenido");
        } else {
            cajas[i].classList.add("error_contenido");
            bandera = false;
        }
    }
    return bandera;
}

function limpiar__cajas() {
    let cajas = document.querySelectorAll(".input__caja");
    for (let i = 0; i < cajas.length; i++) {
        cajas[i].value = "";
    }
}

function validacionCadena(palabra) {
    if (palabra.length != 0) {
        return true;
    }
    return false;
}