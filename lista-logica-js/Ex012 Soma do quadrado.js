function somaDosQuadrados(a, b, c, d) {
  return a**2 + b**2 + c**2 + d**2;
}

let num1 = parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));
let num3 = parseInt(prompt("Digite o terceiro número: "));
let num4 = parseInt(prompt("Digite o quarto número: "));

let resultado = somaDosQuadrados(num1, num2, num3, num4);
alert("A soma dos quadrados é: " + resultado);