let vetor = new Array(10);
let soma = 0;

for (let i = 0; i < 10; i++) {
  vetor[i] = parseInt(prompt(`Digite o ${i+1}º número:`));
  soma += vetor[i];
}

console.log(`Vetor: ${vetor}`);
console.log(`Soma dos elementos: ${soma}`);