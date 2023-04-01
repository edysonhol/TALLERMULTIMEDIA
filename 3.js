
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