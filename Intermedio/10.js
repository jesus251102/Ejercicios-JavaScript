// Detecta si una palabra o frase es palíndroma.

const prompt = require("prompt-sync")();

let word = prompt("Ingresa una palabra:");

if (word.split("").reverse().join("") === word) {
    console.log(`La palabra ${word} es un palindromo.`)
} else {
    console.log(`La palabra ${word} no es un palindromo.`)
}