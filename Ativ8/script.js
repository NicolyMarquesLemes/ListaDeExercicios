 function removerAcentos(str) {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    document.getElementById('form-palindromo').addEventListener('submit', function(e) {
      e.preventDefault();

      const input = document.getElementById('palavra').value;
      const resultadoDiv = document.getElementById('resultado');

      // Normalizar a string: remover acentos, espaços e transformar em minúsculas
      const original = removerAcentos(input.toLowerCase().replace(/[^a-z0-9]/gi, ''));
      const reverso = original.split('').reverse().join('');

      if (original === '') {
        resultadoDiv.innerHTML = 'Digite uma palavra ou frase válida.';
        return;
      }

      if (original === reverso) {
        resultadoDiv.innerHTML = `É um palíndromo!`;
      } else {
        resultadoDiv.innerHTML = `Não é um palíndromo.`;
      }
    });