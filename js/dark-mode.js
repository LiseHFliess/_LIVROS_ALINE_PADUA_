document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-theme');
  if (toggleButton) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    const applyTheme = (isDark) => {
      document.body.classList.toggle('dark-mode', isDark);
      toggleButton.textContent = isDark ? '☀️ Modo Claro' : '🌙 Modo Escuro';
    };

    applyTheme(savedTheme === 'dark' || (!savedTheme && prefersDark));

    toggleButton.addEventListener('click', () => {
      const isDark = !document.body.classList.contains('dark-mode');
      applyTheme(isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
});
