document.getElementById('form-idade').addEventListener('submit', function(e) {
      e.preventDefault();

      const dataNascimento = new Date(document.getElementById('dataNascimento').value);
      const hoje = new Date();
      const resultadoDiv = document.getElementById('resultado');

      if (isNaN(dataNascimento)) {
        resultadoDiv.innerHTML = 'Por favor, insira uma data válida.';
        return;
      }

      let idade = hoje.getFullYear() - dataNascimento.getFullYear();
      const mesAtual = hoje.getMonth();
      const diaAtual = hoje.getDate();
      const mesNascimento = dataNascimento.getMonth();
      const diaNascimento = dataNascimento.getDate();


      if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
      }

      let classificacao;
      if (idade < 18) {
        classificacao = 'Menor de idade';
      } else if (idade <= 60) {
        classificacao = 'Maior de idade';
      } else {
        classificacao = 'Idoso';
      }

      resultadoDiv.innerHTML = `Idade: ${idade} anos<br>Classificação: <strong>${classificacao}</strong>`;
    });