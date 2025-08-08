//Ingresa tu fecha de nacimiento y devuelve tu edad actual.

const boton = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function () {
    let nacimiento = document.getElementById("nacimiento").value;
    let fechaNacimiento = new Date(nacimiento);
    let hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    resultado.textContent = `Resultado: Tienes ${edad} años.`;
})
