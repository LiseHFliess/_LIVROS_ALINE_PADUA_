document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('myInput');
  const links = document.querySelectorAll('.aside-anchor');

  const closeMenu = () => {
    checkbox.checked = false;
    document.body.classList.remove('menu-open');
  };

  const updateMenuState = () => {
    document.body.classList.toggle('menu-open', checkbox.checked);
  };

  if (checkbox) {
    checkbox.addEventListener('change', updateMenuState);
    links.forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }
});
