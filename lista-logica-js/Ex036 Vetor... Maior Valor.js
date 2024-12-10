let vetor = new Array(8);
for (let i = 0; i < 8; i++) {
  vetor[i] = parseInt(prompt("Digite um número inteiro: "));
}
let maior = vetor[0];
for (let i = 1; i < 8; i++) {
  if (vetor[i] > maior) {
    maior = vetor[i];
  }
}
console.log("O maior valor no vetor é: " + maior);