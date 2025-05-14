let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;

    function verificar() {
      const palpite = parseInt(document.getElementById("palpite").value);
      const mensagem = document.getElementById("mensagem");

      if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.textContent = "Digite um número entre 1 e 100.";
        return;
      }

      tentativas++;

      if (palpite === numeroSecreto) {
        mensagem.textContent = `🎉 Parabéns! Você acertou em ${tentativas} tentativa(s)!`;
      } else if (palpite < numeroSecreto) {
        mensagem.textContent = "🔼 Tente um número maior.";
      } else {
        mensagem.textContent = "🔽 Tente um número menor.";
      }
    }

    function reiniciar() {
      numeroSecreto = Math.floor(Math.random() * 100) + 1;
      tentativas = 0;
      document.getElementById("palpite").value = '';
      document.getElementById("mensagem").textContent = "Novo número escolhido! Boa sorte!";
    }