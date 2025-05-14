function verificarPrimo() {
      const num = parseInt(document.getElementById("numero").value);
      const resultado = document.getElementById("resultado");

      if (isNaN(num) || num < 1) {
        resultado.textContent = "Por favor, insira um número inteiro positivo.";
        return;
      }

      if (num === 1) {
        resultado.textContent = "1 não é primo.";
        return;
      }

      let ehPrimo = true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          ehPrimo = false;
          break;
        }
      }

      resultado.textContent = ehPrimo
        ? ` ${num} é um número primo!`
        : ` ${num} não é primo.`;
    }