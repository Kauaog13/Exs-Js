function elefantesMusica(N) {
    if (N <= 0 || N >= 100) {
        console.log("N deve ser maior que 0 e menor que 100.");
        return;
    }

    for (let i = 1; i <= N; i++) {
        if (i === 1) {
            console.log(`${i} elefante incomoda muita gente`);
        } else {
            console.log(`${i} elefantes incomodam muita gente`);
        }

        // Para o (N + 1) elefantes
        if (i === N) {
            const repeticoes = Array(i + 1).fill("incomodam").join(", ");
            console.log(`${i + 1} elefantes incomodam, ${repeticoes} muito mais!`);
        }
    }
}

// Solicita a entrada do usuário
const N = parseInt(prompt("Digite um número entre 1 e 99: "), 10);
elefantesMusica(N);