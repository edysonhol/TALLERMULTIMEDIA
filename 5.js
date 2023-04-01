
function identificarNumeros() {
    // Obtener el valor ingresado por el usuario
    let numero = parseInt(document.getElementById("numero").value);

    // Verificar que el valor ingresado sea un número entero positivo
    if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
        document.getElementById("resultado").innerHTML = "El valor ingresado no es un número entero positivo.";
        return;
    }

    // Identificar si el número es par o impar
    let mensaje = "";
    if (numero % 2 === 0) {
        mensaje = `${numero} es un número par.`;
    } else {
        mensaje = `${numero} es un número impar.`;
    }

    // Mostrar el resultado en la página HTML
    document.getElementById("resultado").innerHTML = mensaje;
}