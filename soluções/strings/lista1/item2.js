import PromptSync from "prompt-sync";
const prompt = PromptSync();

let string1 = prompt("Insira a primeira string: ");
let string2 = prompt("Insira a segunda string: ");

let tamanho1 = string1.length;
let tamanho2 = string2.length;

if(tamanho1 > tamanho2){
    console.log(string1);
}
else{
    if(tamanho2 > tamanho1){
        console.log(string2);
    }
    else{
        console.log(string1);
    }
}