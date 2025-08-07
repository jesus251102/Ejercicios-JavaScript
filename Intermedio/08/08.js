const contador = document.getElementById("contador");
const contar = document.getElementById("contar");
let count = 0;

contar.addEventListener("click", function () {
    count++;
    contador.textContent = `Contador: ${count}`;
})