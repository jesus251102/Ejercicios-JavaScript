const prompt = require('prompt-sync')();

let number1 = parseFloat(prompt("Ingresa el primer número: "));
let number2 = parseFloat(prompt("Ingresa el segundo número: "));

let operation = prompt("Elige una operación:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n");
switch (operation) {
    case '1':
        console.log(`La suma de ${number1} y ${number2} es: ${sumar(number1, number2)}`);
        break;
    case '2':
        console.log(`La resta de ${number1} y ${number2} es: ${restar(number1, number2)}`);
        break;
    case '3':
        console.log(`La multiplicación de ${number1} y ${number2} es: ${multiplicar(number1, number2)}`);
        break;
    case '4':
        console.log(`La división de ${number1} y ${number2} es: ${dividir(number1, number2)}`);
        break;
}

//Función sumar
function sumar(number1, number2) {
    return parseFloat(number1) + parseFloat(number2);
}
//Función restar
function restar(number1, number2) {
    return parseFloat(number1) - parseFloat(number2);
}

//Función multiplicar
function multiplicar(number1, number2) {
    return parseFloat(number1) * parseFloat(number2);
}

//Función dividir
function dividir(number1, number2) {
    if (parseFloat(number2) === 0) {
        return "Error: División por cero no permitida.";
    }
    return parseFloat(number1) / parseFloat(number2);
}