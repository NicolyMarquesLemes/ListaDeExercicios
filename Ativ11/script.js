document.getElementById('form-notas').addEventListener('submit', function(e) {
      e.preventDefault();

      let valor = parseInt(document.getElementById('valor').value);
      const resultadoDiv = document.getElementById('resultado');

      if (isNaN(valor) || valor < 0) {
        resultadoDiv.innerHTML = 'Digite um valor válido.';
        return;
      }

      const notas = [100, 50, 10, 1];
      const distribuicao = {};

      notas.forEach(nota => {
        distribuicao[nota] = Math.floor(valor / nota);
        valor %= nota;
      });

      let resultadoHTML = '<p>Distribuição de notas:</p><ul>';
      for (let nota of notas) {
        if (distribuicao[nota] > 0) {
          resultadoHTML += `<li>${distribuicao[nota]} nota(s) de R$${nota}</li>`;
        }
      }
      resultadoHTML += '</ul>';

      resultadoDiv.innerHTML = resultadoHTML;
    });