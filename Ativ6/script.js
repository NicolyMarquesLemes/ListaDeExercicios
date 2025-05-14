document.getElementById('form-tabuada').addEventListener('submit', function(e) {
      e.preventDefault();
      const numero = parseInt(document.getElementById('numero').value);
      const resultadoDiv = document.getElementById('resultado');
      resultadoDiv.innerHTML = ''; 

      if (isNaN(numero)) {
        resultadoDiv.innerHTML = '<p>Por favor, insira um número válido.</p>';
        return;
      }

      let html = `<h2>Tabuada do ${numero}</h2><ul>`;
      for (let i = 1; i <= 10; i++) {
        html += `<li>${numero} x ${i} = ${numero * i}</li>`;
      }
      html += '</ul>';
      resultadoDiv.innerHTML = html;
    });