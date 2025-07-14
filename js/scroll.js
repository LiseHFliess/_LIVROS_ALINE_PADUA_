document.addEventListener('DOMContentLoaded', () => {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const scrollDownBtn = document.getElementById('scrollDownBtn');

  // Mostra o botão "Subir" ao rolar
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('show', window.scrollY > 100);
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mostra sempre o botão "Descer" (pode ajustar se quiser esconder em algum momento)
  if (scrollDownBtn) {
    scrollDownBtn.classList.add('show'); // Torna visível logo de início

    scrollDownBtn.addEventListener('click', () => {
      window.scrollBy({ top: 500, behavior: 'smooth' }); // Ajuste a quantidade conforme necessário
    });
  }
});
