// Esperar a que el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    const btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", evaluarEstudiante);
});

function evaluarEstudiante() {
    // 1. Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const val1 = document.getElementById("calif1").value.trim();
    const val2 = document.getElementById("calif2").value.trim();
    const val3 = document.getElementById("calif3").value.trim();

    // A. Validación de información
    if (nombre === "") {
        alert("Por favor, ingresa el nombre del estudiante.");
        return;
    }

    if (val1 === "" || val2 === "" || val3 === "") {
        alert("Por favor, ingresa las tres calificaciones antes de calcular.");
        return;
    }

    // Convertir a números decimales
    const c1 = parseFloat(val1);
    const c2 = parseFloat(val2);
    const c3 = parseFloat(val3);

    // Verificar que sean números válidos
    if (isNaN(c1) || isNaN(c2) || isNaN(c3)) {
        alert("Las calificaciones deben ser valores numéricos válidos.");
        return;
    }

    // Verificar que estén en el rango de 0 a 10
    if (c1 < 0 || c1 > 10 || c2 < 0 || c2 > 10 || c3 < 0 || c3 > 10) {
        alert("Todas las calificaciones deben estar entre 0 y 10.");
        return;
    }

    // B. Calcular el promedio
    const promedio = (c1 + c2 + c3) / 3;

    // C. Determinar el resultado (APROBADO / REPROBADO)
    let estado = "";
    let claseEstado = "";

    if (promedio >= 6 && promedio <= 10) {
        estado = "APROBADO";
        claseEstado = "aprobado";
    } else {
        estado = "REPROBADO";
        claseEstado = "reprobado";
    }

    // D. Mostrar una observación según el promedio
    let observacion = "";

    if (promedio >= 9) {
        observacion = "Excelente desempeño";
    } else if (promedio >= 8) {
        observacion = "Muy buen desempeño";
    } else if (promedio >= 7) {
        observacion = "Buen desempeño";
    } else if (promedio >= 6) {
        observacion = "Desempeño suficiente";
    } else {
        observacion = "Necesita mejorar";
    }

    // 4. Presentar los resultados dentro de la página web
    const contenedorResultado = document.getElementById("resultado");
    contenedorResultado.style.display = "block";
    contenedorResultado.innerHTML = `
        <h2>Resultados de la Evaluación</h2>
        <p><strong>Estudiante:</strong> ${nombre}</p>
        <p><strong>Calificaciones:</strong> ${c1.toFixed(1)}, ${c2.toFixed(1)}, ${c3.toFixed(1)}</p>
        <p><strong>Promedio obtenido:</strong> ${promedio.toFixed(2)}</p>
        <p><strong>Estado:</strong> <span class="${claseEstado}">${estado}</span></p>
        <p><strong>Observación:</strong> ${observacion}</p>
    `;
}