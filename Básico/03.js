//Dado tres números, muestra cuál es el mayor.

let number1 = 5;
let number2 = 10;
let number3 = 7;

if (number1 > number2 && number1 > number3) {
    console.log(`El número mayor es ${number1}`);
} else if (number2 > number1 && number2 > number3) {
    console.log(`El número mayor es ${number2}`);
} else {
    console.log(`El número mayor es ${number3}`);
}