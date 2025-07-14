
  const slides = document.querySelectorAll('.slide');
  const btnAnterior = document.querySelector('.carrossel-btn.anterior');
  const btnProximo = document.querySelector('.carrossel-btn.proximo');
  let indiceAtual = 0;

  function mostrarSlide(indice) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('ativo', i === indice);
    });
  }

  btnAnterior.addEventListener('click', () => {
    indiceAtual = (indiceAtual - 1 + slides.length) % slides.length;
    mostrarSlide(indiceAtual);
  });

  btnProximo.addEventListener('click', () => {
    indiceAtual = (indiceAtual + 1) % slides.length;
    mostrarSlide(indiceAtual);
  });

  // Inicializa o carrossel
  mostrarSlide(indiceAtual);

