window.addEventListener("scroll", function () {
  const menu = document.getElementById("menu");
  if (window.scrollY > 100) {
    menu.classList.add("shrink");
  } else {
    menu.classList.remove("shrink");
  }
});
