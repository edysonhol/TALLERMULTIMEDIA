
function buscarTexto() {
    // Obtener el texto y el texto a buscar
    let texto = document.getElementById("texto").value;
    let textoABuscar = document.getElementById("buscar").value;

    // Crear una expresión regular para buscar el texto a buscar en el texto
    let regex = new RegExp(textoABuscar, "gi");

    // Reemplazar el texto a buscar con una versión resaltada del texto a buscar
    let resultado = texto.replace(regex, '<span class="highlight">$&</span>');

    // Mostrar el resultado en la página HTML
    document.getElementById("resultado").innerHTML = resultado;
}