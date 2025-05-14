document.getElementById('form-calculadora').addEventListener('submit', function(e) {
      e.preventDefault();

      const num1 = parseFloat(document.getElementById('numero1').value);
      const num2 = parseFloat(document.getElementById('numero2').value);
      const operacao = document.getElementById('operacao').value;
      const resultadoDiv = document.getElementById('resultado');
      let resultado;

      if (isNaN(num1) || isNaN(num2)) {
        resultadoDiv.innerHTML = 'Por favor, insira dois números válidos.';
        return;
      }

      switch (operacao) {
        case 'soma':
          resultado = num1 + num2;
          resultadoDiv.innerHTML = `${num1} + ${num2} = ${resultado}`;
          break;
        case 'subtracao':
          resultado = num1 - num2;
          resultadoDiv.innerHTML = `${num1} − ${num2} = ${resultado}`;
          break;
        case 'multiplicacao':
          resultado = num1 * num2;
          resultadoDiv.innerHTML = `${num1} × ${num2} = ${resultado}`;
          break;
        case 'divisao':
          if (num2 === 0) {
            resultadoDiv.innerHTML = 'Erro: divisão por zero!';
          } else {
            resultado = num1 / num2;
            resultadoDiv.innerHTML = `${num1} ÷ ${num2} = ${resultado}`;
          }
          break;
        default:
          resultadoDiv.innerHTML = 'Operação inválida.';
      }
    });