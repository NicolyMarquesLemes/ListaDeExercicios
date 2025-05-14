let segundos = 0;
    let timer = null;

    function atualizarDisplay() {
      const horas = String(Math.floor(segundos / 3600)).padStart(2, '0');
      const minutos = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
      const segs = String(segundos % 60).padStart(2, '0');

      document.getElementById('display').textContent = `${horas}:${minutos}:${segs}`;
    }

    function iniciar() {
      if (timer) return; // já está rodando

      timer = setInterval(() => {
        segundos++;
        atualizarDisplay();
      }, 1000);
    }

    function pausar() {
      clearInterval(timer);
      timer = null;
    }

    function zerar() {
      pausar();
      segundos = 0;
      atualizarDisplay();
    }