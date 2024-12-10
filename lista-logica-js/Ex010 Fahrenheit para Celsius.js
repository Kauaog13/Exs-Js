const fahrenheit = parseFloat(prompt("Digite o valor em graus Fahrenheit: "));
const celsius = (fahrenheit - 32) * 5 / 9;
alert(`A temperatura em graus Celsius é: ${celsius.toFixed(2)}`);