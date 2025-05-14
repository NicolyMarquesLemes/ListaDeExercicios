function calcularMedia() {
      const nota1 = parseFloat(document.getElementById("nota1").value);
      const nota2 = parseFloat(document.getElementById("nota2").value);
      const nota3 = parseFloat(document.getElementById("nota3").value);
      
      const notas = [nota1, nota2, nota3].filter(nota => !isNaN(nota) && nota >= 0);
      
      if (notas.length < 3) {
        document.getElementById("resultado").textContent = " Você precisa inserir pelo menos 3 notas.";
        return;
      }

      const somaNotas = notas.reduce((a, b) => a + b, 0);
      const media = somaNotas / notas.length;
      
      let resultadoTexto = ` Média: ${media.toFixed(1)}. `;

      if (media >= 7) {
        resultadoTexto += " Aprovado";
      } else if (media >= 5) {
        resultadoTexto += " Recuperação";
      } else {
        resultadoTexto += " Reprovado";
      }

      document.getElementById("resultado").textContent = resultadoTexto;
    }