function gerarSenha() {
      const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numeros = '0123456789';
      const simbolos = '!@#$%^&*()-_=+[]{}<>?';
      const todos = letras + numeros + simbolos;

      const tamanho = parseInt(document.getElementById('tamanho').value);
      const senhaDiv = document.getElementById('senha');

      if (isNaN(tamanho) || tamanho < 4) {
        senhaDiv.textContent = 'Escolha um tamanho válido (mínimo de 4).';
        return;
      }

      let senha = '';

      senha += letras.charAt(Math.floor(Math.random() * letras.length));
      senha += numeros.charAt(Math.floor(Math.random() * numeros.length));
      senha += simbolos.charAt(Math.floor(Math.random() * simbolos.length));

      for (let i = 3; i < tamanho; i++) {
        senha += todos.charAt(Math.floor(Math.random() * todos.length));
      }

      senha = senha.split('').sort(() => Math.random() - 0.5).join('');

      senhaDiv.textContent = `Senha: ${senha}`;
    }