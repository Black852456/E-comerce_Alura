var boton_formulariomensaje_objeto = document.querySelector(".contacto__boton_confirmacion");
var caja_nombre_mensaje = document.querySelector(".input__nombre");
var caja_mensaje = document.querySelector(".contacto__mensaje");


boton_formulariomensaje_objeto.addEventListener("click", function(event) {
    event.preventDefault();
    if (validarNombre(caja_nombre_mensaje.value) && validarMensaje(caja_mensaje.value)) {
        caja_nombre_mensaje.value = "";
        caja_mensaje.value = "";
        alert("Mensaje Enviado ✓");
    }
});

function validarNombre(nombre) {
    if (Validar__Contenido(nombre)) {
        caja_nombre_mensaje.classList.remove("error_contenido");
        return true;
    } else {
        caja_nombre_mensaje.classList.add("error_contenido");
    }
    return false;
}

function validarMensaje(Mensaje) {
    if (Validar__Contenido(Mensaje)) {
        caja_mensaje.classList.remove("error_contenido");
        return true;
    } else {
        caja_mensaje.classList.add("error_contenido");
    }
    return false;
}