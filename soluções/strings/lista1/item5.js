import PromptSync from "prompt-sync";
const prompt = PromptSync();

function inverter_string(string){ // Solução do item4.js escrita em formato de função
    let arr = string.split('');
    let arrInvertido = arr.reverse();
    let stringInvertida = arrInvertido.join(''); 
    return stringInvertida;
}
let str = prompt("Insira a string: ");
let strInvertida = inverter_string(str);
console.log(str === strInvertida); // true se forem iguais, false se forem diferentes