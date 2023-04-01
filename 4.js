// 4
function calcularPromedio() {
    // Obtener los valores ingresados por el usuario
    let nombreUsuario = document.getElementById("nombre-usuario").value;
    let nombreMateria = document.getElementById("nombre-materia").value;
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    // Calcular el promedio de las notas
    let promedio = (nota1 + nota2 + nota3) / 3;

    // Determinar si el usuario pasó o perdió la materia
    let mensaje = "";
    if (promedio < 3.0) {
        mensaje = `${nombreUsuario} perdió la materia de ${nombreMateria} con un promedio de ${promedio.toFixed(2)}.`;
    } else {
        mensaje = `${nombreUsuario} pasó la materia de ${nombreMateria} con un promedio de ${promedio.toFixed(2)}.`;
    }

    // Mostrar el resultado en la página HTML
    document.getElementById("resultado").innerHTML = mensaje;
}