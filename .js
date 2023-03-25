
//  1
function contarCaracteres() {

    const texto = document.getElementById("input-text").value;

    const r = document.getElementById("resultado");

    const contador = texto.length;
    
    r.innerHTML = "Tu texto tiene " + contador + " caracteres.";
  }

  //2

  function identificarTipo() {

    const valor = document.getElementById("input-text").value;

    const resultado = document.getElementById("resultado");

     if (isNaN(valor)) {

      resultado.innerHTML = "El valor ingresado es un texto.";

    } else {

      resultado.innerHTML = "El valor ingresado es un número.";

    }
  }

// 3

function verificarEdad() {

    const nombre = document.getElementById("input-nombre").value;

    const edad = document.getElementById("input-edad").value;

    const resultado = document.getElementById("resultado");

    if (edad >= 18) {

      resultado.innerHTML = nombre + ", eres mayor de edad.";

    } else {

      resultado.innerHTML = nombre + ", eres menor de edad.";
      
    }
  }