var boton__login__objeto = document.querySelector(".boton__login");
var caja__email__objeto = document.querySelector(".email");
var caja__pasword__objeto = document.querySelector(".password");


boton__login__objeto.addEventListener("click", function(event) {
    event.preventDefault();
    if (ValidacionEmail() && ValidacionPassword()) {
        console.log("BIEN");
        window.location.href = "productos.html";
    } else {

    }

});

function ValidacionPassword() {
    if (validacionCadena(caja__pasword__objeto.value)) {
        caja__email__objeto.classList.remove("error_contenido");
        return true;
    } else {
        alert("Digite un Password");
        caja__email__objeto.classList.add("error_contenido");
        return false;
    }
}

function ValidacionEmail() {
    if (!validateEmail(caja__email__objeto.value)) {
        caja__email__objeto.classList.add("error_contenido");
        alert("Ingrese un email valido");
        return false;
    } else {
        caja__email__objeto.classList.remove("error_contenido");
        return true;
    }
}

function validateEmail(email) {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

function validacionCadena(palabra) {
    if (palabra.length != 0) {
        return true;
    }
    return false;
}