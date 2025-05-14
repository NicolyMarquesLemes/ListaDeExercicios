function mudarLuz(cor) {
      const luzes = {
        vermelho: document.getElementById('luz-vermelha'),
        amarelo: document.getElementById('luz-amarela'),
        verde: document.getElementById('luz-verde')
      };

      // Remove a classe 'ativo' de todas as luzes
      for (let key in luzes) {
        luzes[key].classList.remove('ativo');
      }

      // Adiciona a classe 'ativo' à luz escolhida
      if (luzes[cor]) {
        luzes[cor].classList.add('ativo');
      }
    }