import promptSync from "prompt-sync";
const prompt = promptSync();

let nome = prompt("Diga o seu nome: ");
console.log("Olá, " + nome); // Concatenação de Strings