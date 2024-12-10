
const nome = prompt("Digite o nome do funcionário:");
const salarioBruto = parseFloat(prompt("Digite o salário bruto do funcionário:"));

const desconto10 = (10 / 100) * salarioBruto;
const salarioLiq = salarioBruto - desconto10;

console.log(`Nome do funcionário: ${nome}`);
console.log(`Salário bruto: R$ ${salarioBruto.toFixed(2)}`);
console.log(`Desconto de 10%: R$ ${desconto10.toFixed(2)}`);
console.log(`Salário líquido: R$ ${salarioLiq.toFixed(2)}`);
