function calcularFatorial(numero) {
    let fatorial = 1;
    let i = numero;
    do {
        fatorial *= i;
        i--;
    } while (i > 0);
    return fatorial;
}

// Exemplo de uso:
let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);