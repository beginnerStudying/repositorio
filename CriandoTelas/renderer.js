document.getElementById('change-theme').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  document.body.classList.toggle('dark-mode');
  console.log('Modo alternado:', document.body.classList);
});


// Ações dos botões de plataforma
document.getElementById('estrategia-concursos').addEventListener('click', () => {
  alert('Plataforma Concursos selecionada');
});

document.getElementById('estrategia-vestibulares').addEventListener('click', async () => {
  console.log('Botão de "estrategia-vestibulares" clicado');
  try {
    const url = await window.electronAPI.askUrl();  // Chama a função do main.js via preload
    console.log(`URL fornecida: ${url}`);
  } catch (error) {
    console.error('Erro ao solicitar a URL:', error);
  }
});
