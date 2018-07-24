var entradas = document.getElementsByClassName("digitar");
var valor = false;
function validar() {
    for (var i = 0; i < entradas.length; i++) {
        if (entradas[i].value == "") {
            valor = true
        }
    }

    if (valor) {
        alert("Preencha os campos!")
    } else {
        alert("Dados enviados!")
    }
}