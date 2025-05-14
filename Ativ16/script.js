function contar() {
      const texto = document.getElementById("texto").value;

      // Contar palavras (ignora múltiplos espaços em branco)
      const palavras = texto.trim().split(/\s+/).filter(p => p !== "");
      const qtdPalavras = palavras.length;

      // Contar letras (remove espaços e pontuação)
      const letrasSomente = texto.replace(/[^a-zA-ZÀ-ÿ]/g, '');
      const qtdLetras = letrasSomente.length;

      const resultado = `
        <p>📝 Palavras: <strong>${qtdPalavras}</strong></p>
        <p>🔤 Letras (sem espaços ou símbolos): <strong>${qtdLetras}</strong></p>
      `;

      document.getElementById("resultado").innerHTML = resultado;
    }