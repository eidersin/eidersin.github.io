  // Inicializa contadores no armazenamento local
  if (!localStorage.getItem('views')) {
    localStorage.setItem('views', 0);
  }
  if (!localStorage.getItem('downloads')) {
    localStorage.setItem('downloads', 0);
  }
  if (!localStorage.getItem('compartilhamento')) {
    localStorage.setItem('compartilhamento', 0);
  }

  // Função para atualizar as estatísticas
  function updateStats() {
    const views = localStorage.getItem('views');
    const downloads = localStorage.getItem('downloads');
    const compartilhamento = localStorage.getItem('compartilhamento');
    document.getElementById('stats').innerText = `Visualizações: ${views} | Downloads: ${downloads} | Compartilhamentos: ${compartilhamento}`;
  }

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

  // Aumenta o contador de visualizações
  window.addEventListener('load', () => {
    let views = parseInt(localStorage.getItem('views'));
    localStorage.setItem('views', views + 1);
    updateStats();
    updateShareLink();
  });

  // Aumenta o contador de downloads
  document.getElementById('downloadLink').addEventListener('click', () => {
    let downloads = parseInt(localStorage.getItem('downloads'));
    localStorage.setItem('downloads', downloads + 1);
    updateStats(); // Atualiza as estatísticas após o download
  });

  // Aumenta o contador de compartilhamentos
  document.getElementById('shareLink').addEventListener('click', () => {
    let compartilhamento = parseInt(localStorage.getItem('compartilhamento'));
    localStorage.setItem('compartilhamento', compartilhamento + 1);
    updateStats(); // Atualiza as estatísticas após o compartilhamento
  });

  // Inicializa as estatísticas
  updateStats();