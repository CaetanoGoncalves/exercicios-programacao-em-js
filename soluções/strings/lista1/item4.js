import PromptSync from "prompt-sync";
const prompt = PromptSync();

let string = prompt("Insira a string: ");
let array = string.split('');
let arrInvertido = array.reverse();// Método reverse inverte um array
let stringInvertida = arrInvertido.join('');  // Método join transforma um array em uma string
console.log(stringInvertida);