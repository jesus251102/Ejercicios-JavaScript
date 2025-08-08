//Contador de clics en un botón (DOM)
// Cada clic suma 1 y lo muestra en pantalla.

const contador = document.getElementById("contador");
const contar = document.getElementById("contar");
let count = 0;

contar.addEventListener("click", function () {
    count++;
    contador.textContent = `Contador: ${count}`;
})