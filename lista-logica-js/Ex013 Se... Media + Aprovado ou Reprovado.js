function calcularMedia(nota1, nota2, nota3, nota4) {
  let media = (nota1 + nota2 + nota3 + nota4) / 4;
  return media;
}

function verificarAprovacao(media) {
  if (media > 5) {
    return "Aprovado";
  } else if (media < 5) {
    return "Reprovado";
  } else {
    return "Recuperação";
  }
}

let nota1 = parseFloat(prompt("Digite a nota do 1º bimestre:"));
let nota2 = parseFloat(prompt("Digite a nota do 2º bimestre:"));
let nota3 = parseFloat(prompt("Digite a nota do 3º bimestre:"));
let nota4 = parseFloat(prompt("Digite a nota do 4º bimestre:"));

let media = calcularMedia(nota1, nota2, nota3, nota4);
let resultado = verificarAprovacao(media);

alert(`Média: ${media.toFixed(2)} - Resultado: ${resultado}`);