    var boton_busqueda_objeto = document.querySelector(".boton__busqueda");
    var caja_busqueda_objeto = document.querySelector(".caja__busqueda");

    boton_busqueda_objeto.addEventListener("click", function(e) {
        e.preventDefault();

        if (Validar__Contenido(caja_busqueda_objeto.value)) {
            alert("Busqueda en Proceso ...");
        } else {
            alert("Digite el contenido de busqueda");
        }

    });

    function Validar__Contenido(palabra) {
        let palabrainterna = palabra.trim();
        if (palabrainterna.length > 0) {
            return true;
        }
        return false;
    }