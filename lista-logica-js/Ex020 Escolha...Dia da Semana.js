const diasSemana = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado", "domingo"];

const diaSemana = parseInt(prompt("Digite o dia da semana (1 a 7):"));

if (diaSemana >= 1 && diaSemana <= 7) {
  alert(`Hoje é ${diasSemana[diaSemana - 1]}.`);
} else {
  alert("Dia inválido.");
}