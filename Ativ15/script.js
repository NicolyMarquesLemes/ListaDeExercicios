const votos = [0, 0, 0];

    function votar(indice) {
      votos[indice]++;
      mostrarResultados();
    }

    function mostrarResultados() {
      const total = votos.reduce((a, b) => a + b, 0);
      const opcoes = ["Kuromi", "Hello Kitty", "My Melody"];
      let html = `<p>Total de votos: <strong>${total}</strong></p>`;

      for (let i = 0; i < votos.length; i++) {
        const percentual = total > 0 ? ((votos[i] / total) * 100).toFixed(1) : 0;
        html += `
          <p><strong>${opcoes[i]}</strong>: ${votos[i]} votos (${percentual}%)</p>
          <div class="barra" style="width: ${percentual}%; background-color: ${cor(i)};">
            ${percentual > 5 ? percentual + '%' : ''}
          </div>
        `;
      }

      document.getElementById('resultado').innerHTML = html;
    }

    function cor(i) {
      const cores = ['#007bff', '#28a745', '#ff9800'];
      return cores[i % cores.length];
    }