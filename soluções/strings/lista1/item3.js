import PromptSync from "prompt-sync";
const prompt = PromptSync();

let string = prompt("Insira a string: ");
let array = string.split(''); // Método split separa os chars de uma string.
console.log(array);
