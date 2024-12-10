const calcularAreaTriangulo = () => {
    const base = parseFloat(prompt("Digite o valor da base do triângulo:"));
    const altura = parseFloat(prompt("Digite o valor da altura do triângulo:"));
    const area = (base * altura) / 2;
    alert(`A Área do triângulo é: ${area}`);
};

calcularAreaTriangulo();