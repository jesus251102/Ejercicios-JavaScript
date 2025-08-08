const cronometro = document.getElementById("cronometro");
const iniciar = document.getElementById("iniciar");

iniciar.addEventListener("click", function () {
    let segundos = 0;
    cronometro.textContent = "0 s";
    const intervalo = setInterval(function () {
        segundos++;
        cronometro.textContent = segundos + " s";
        if (segundos === 100) {
            clearInterval(intervalo);
            alert("¡Tiempo terminado!");
        }
    }, 500);
});
