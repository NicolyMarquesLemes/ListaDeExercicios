function validarFormulario(event) {
      event.preventDefault(); // Evita envio do formulário

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const senha = document.getElementById("senha").value.trim();
      const mensagem = document.getElementById("mensagem");

      if (!nome || !email || !senha) {
        mensagem.textContent = "Preencha todos os campos.";
        mensagem.className = "erro";
        return;
      }

      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailValido) {
        mensagem.textContent = "E-mail inválido.";
        mensagem.className = "erro";
        return;
      }

      mensagem.textContent = "Formulário válido!";
      mensagem.className = "sucesso";
    }