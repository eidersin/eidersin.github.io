  // Atualiza a URL de compartilhamento
  function updateShareLink() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Confira o currículo de Wanderson Teixeira Sousa!');

    // Configura o link para WhatsApp
    const whatsappLink = `https://wa.me/?text=${text}%20${url}`;

    // Configura o link para Email
    const emailLink = `mailto:?subject=Currículo de Wanderson Teixeira Sousa&body=${text}%20${url}`;

    // Atualiza o link de compartilhamento
    document.getElementById('shareLink').href = whatsappLink;
    document.getElementById('shareLink').innerText = 'Compartilhar';
  }

  // Inicializa as estatísticas
  updateStats();