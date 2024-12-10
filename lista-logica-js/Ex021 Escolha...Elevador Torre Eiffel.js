
let andar = prompt("Selecione o andar que deseja ir: \n1 - Terreo \n2 - 1º andar \n3 - 2º andar \n4 - 3º andar");

switch (andar) {
  case "1":
    alert("Você está indo para o Terreo.");
    break;
  case "2":
    alert("Você está indo para o 1º andar.");
    break;
  case "3":
    alert("Você está indo para o 2º andar.");
    break;
  case "4":
    alert("Você está indo para o 3º andar.");
    break;
  default:
    alert("Opção inválida. Por favor, selecione um andar válido.");
}
