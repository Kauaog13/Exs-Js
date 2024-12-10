function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

let celsius = 32;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius} graus Celsius é igual a ${fahrenheit} graus Fahrenheit.`);