document.getElementById('form-conversao').addEventListener('submit', function(e) {
      e.preventDefault();

      const celsius = parseFloat(document.getElementById('celsius').value);
      const unidade = document.getElementById('unidade').value;
      const resultadoDiv = document.getElementById('resultado');

      if (isNaN(celsius)) {
        resultadoDiv.innerHTML = 'Por favor, insira uma temperatura válida.';
        return;
      }

      let resultado;

      if (unidade === 'fahrenheit') {
        resultado = (celsius * 9/5) + 32;
        resultadoDiv.innerHTML = `${celsius.toFixed(2)}°C = ${resultado.toFixed(2)}°F`;
      } else if (unidade === 'kelvin') {
        resultado = celsius + 273.15;
        resultadoDiv.innerHTML = `${celsius.toFixed(2)}°C = ${resultado.toFixed(2)}K`;
      } else {
        resultadoDiv.innerHTML = 'Unidade de conversão inválida.';
      }
    });