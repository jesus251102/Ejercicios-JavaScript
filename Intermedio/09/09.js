// To-Do List simple: Agrega tareas con un input y elimínalas con un botón.

const tarea = document.getElementById("tarea");
const addboton = document.getElementById("agregar");
const delboton = document.getElementById("eliminar");
const lista = document.getElementById("lista-tareas");

addboton.addEventListener("click", function () {
    if (tarea.value !== "") {
        const tareaNueva = document.createElement("li");
        tareaNueva.textContent = tarea.value;
        lista.appendChild(tareaNueva);
        tarea.value = "";
    } else {
        alert("Por favor, ingresa una tarea.");
    }
})


delboton.addEventListener("click", function () {
    if (lista.children.length > 0) {
        lista.removeChild(lista.lastElementChild);
    }
})