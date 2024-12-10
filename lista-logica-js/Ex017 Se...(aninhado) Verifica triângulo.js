function verificarTriangulo(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return "Triângulo equilátero";
        } else if (a === b || a === c || b === c) {
            return "Triângulo isósceles";
        } else {
            return "Triângulo escaleno";
        }
    } else {
        return "Não é um triângulo";
    }
}

let ladoA = parseFloat(prompt("Digite o comprimento do lado A:"));
let ladoB = parseFloat(prompt("Digite o comprimento do lado B:"));
let ladoC = parseFloat(prompt("Digite o comprimento do lado C:"));

let resultado = verificarTriangulo(ladoA, ladoB, ladoC);
alert(resultado);