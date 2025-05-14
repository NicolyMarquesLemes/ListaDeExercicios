const lista = document.getElementById('lista-compras');
    const formulario = document.getElementById('form-lista');
    const inputItem = document.getElementById('item');

    formulario.addEventListener('submit', function(e) {
      e.preventDefault();
      const itemTexto = inputItem.value.trim();

      if (itemTexto !== '') {
        const novoItem = document.createElement('li');
        novoItem.textContent = itemTexto;
        lista.appendChild(novoItem);
        inputItem.value = '';
        inputItem.focus();
      }
    });

    function limparLista() {
      lista.innerHTML = '';
      inputItem.focus();
    }