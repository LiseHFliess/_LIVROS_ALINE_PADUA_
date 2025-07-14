document.addEventListener('DOMContentLoaded', () => {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const scrollDownBtn = document.getElementById('scrollDownBtn');
  const navHeight = 80;

  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('show', window.scrollY > 100);
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (scrollDownBtn) {
    scrollDownBtn.classList.add('show');

    scrollDownBtn.addEventListener('click', () => {
      const headings = Array.from(document.querySelectorAll('[id] h2, footer[id] h1'));

      const currentScroll = window.scrollY + navHeight + 5; // pequena margem extra

      // Encontrar o próximo <h2> que ainda não está visível
      const nextHeading = headings.find(h2 => {
        const offset = h2.getBoundingClientRect().top + window.scrollY;
        return offset > currentScroll;
      });

      if (nextHeading) {
        const targetOffset = nextHeading.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetOffset, behavior: 'smooth' });
      }
    });
  }
});
