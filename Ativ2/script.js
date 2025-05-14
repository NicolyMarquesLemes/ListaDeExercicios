document.getElementById('form-contagem').addEventListener('submit', function(e) {
      e.preventDefault();

      const inicio = parseInt(document.getElementById('inicio').value);
      const fim = parseInt(document.getElementById('fim').value);
      let passo = parseInt(document.getElementById('passo').value);
      const resultadoDiv = document.getElementById('resultado');
      resultadoDiv.innerHTML = '';

      if (isNaN(inicio) || isNaN(fim) || isNaN(passo)) {
        resultadoDiv.innerHTML = '<p>Por favor, preencha todos os campos com números válidos.</p>';
        return;
      }

      if (passo <= 0) {
        resultadoDiv.innerHTML = '<p>Passo inválido! Usando passo = 1 por padrão.</p>';
        passo = 1;
      }

      let contagem = '';
      if (inicio < fim) {
        for (let i = inicio; i <= fim; i += passo) {
          contagem += `${i} > `;
        }
      } else {
        for (let i = inicio; i >= fim; i -= passo) {
          contagem += `${i} > `;
        }
      }
      contagem += '*Final*';

      resultadoDiv.innerHTML = `<p><strong>Contando:</strong><br>${contagem}</p>`;
    });