
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Escolha uma opção:");
console.log("1. Adição");
console.log("2. Subtração");
console.log("3. Multiplicação");
console.log("4. Divisão");

readline.question('Digite o número da opção: ', opcao => {
  readline.question('Digite o primeiro número: ', num1 => {
    readline.question('Digite o segundo número: ', num2 => {
      let resultado;

      switch (opcao) {
        case '1':
          resultado = parseFloat(num1) + parseFloat(num2);
          console.log(`O resultado da adição é: ${resultado}`);
          break;
        case '2':
          resultado = parseFloat(num1) - parseFloat(num2);
          console.log(`O resultado da subtração é: ${resultado}`);
          break;
        case '3':
          resultado = parseFloat(num1) * parseFloat(num2);
          console.log(`O resultado da multiplicação é: ${resultado}`);
          break;
        case '4':
          if (num2 !== '0') {
            resultado = parseFloat(num1) / parseFloat(num2);
            console.log(`O resultado da divisão é: ${resultado}`);
          } else {
            console.log("Erro: Divisão por zero!");
          }
          break;
        default:
          console.log("Opção inválida!");
      }

      readline.close();
    });
  });
});