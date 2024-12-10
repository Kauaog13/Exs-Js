let n = parseInt(prompt("Digite um número: "));
let pares = 0;
let impares = 0;

while (n > 0) {
  if (n % 2 === 0) {
    pares++;
    console.log(`Número par: ${n}`);
  } else {
    impares++;
    console.log(`Número ímpar: ${n}`);
  }
  n--;
}

console.log(`Quantidade de números pares: ${pares}`);
console.log(`Quantidade de números ímpares: ${impares}`);