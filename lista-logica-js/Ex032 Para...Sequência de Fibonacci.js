const n = parseInt(prompt("Digite o valor de N: "));
let fib = [0, 1];

while (fib.length < n) {
  fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
}

console.log(fib);