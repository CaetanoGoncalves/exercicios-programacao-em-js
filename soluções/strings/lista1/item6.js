import PromptSync from "prompt-sync";
const prompt = PromptSync();

function inverter_string(string){
    let arr = string.split('');
    let arrInvertido = arr.reverse();
    let stringInvertida = arrInvertido.join(''); 
    return stringInvertida;
}
function eh_palindromo(string){ // Item anterior em formato de função.
    let stringInvertida = inverter_string(string);
    return stringInvertida === string;
}

let arr = JSON.parse(prompt("Insira o array: ")); // Forma de ler arrays por prompt
let arr2 = [];
for(let i = 0; i < arr.length; i++){
    if(eh_palindromo(arr[i])){
        arr2.push(arr[i]);
    }
}
console.log(arr2);