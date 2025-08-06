// Contador de vocales en una palabra

const word = "medicamento";
var vocales = "aeiouAEIOU";
let contador = 0;
for (let i = 0; i < word.length; i++) {
    if (vocales.includes(word[i])) {
        contador++;
    }
}
console.log(`Hay ${contador} vocales en la palabra ${word}.`);

