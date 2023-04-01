//  1
function contarCaracteres() {

    const texto = document.getElementById("input-text").value;

    const r = document.getElementById("resultado");

    const contador = texto.length;
    
    r.innerHTML = "Tu texto tiene " + contador + " caracteres.";
  }
