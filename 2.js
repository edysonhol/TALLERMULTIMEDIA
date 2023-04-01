
function identificarTipo() {

    const valor = document.getElementById("input-text").value;

    const resultado = document.getElementById("resultado");

     if (isNaN(valor)) {

      resultado.innerHTML = "El valor ingresado es un texto.";

    } else {

      resultado.innerHTML = "El valor ingresado es un número.";

    }
  }
