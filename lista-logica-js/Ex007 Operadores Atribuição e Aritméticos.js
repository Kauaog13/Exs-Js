let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));

let soma = num1 + num2;
let subt = num1 - num2;
let mult = num1 * num2;
let divComum = num1 / num2;
let divInteiro = Math.floor(num1 / num2);
let modDiv = num1 % num2;
let expo = Math.pow(num1, num2);

console.log("Soma:", soma);
console.log("Subtração:", subt);
console.log("Multiplicação:", mult);
console.log("Divisão comum:", divComum);
console.log("Divisão inteira:", divInteiro);
console.log("Módulo:", modDiv);
console.log("Exponenciação:", expo);