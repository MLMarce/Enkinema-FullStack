//abrir - cerrar menu de nav
function handleNavMenu() {
  let hamburgerElement = document.querySelector(".hamburger");
  hamburgerElement.addEventListener("click", (e) => {
    document.querySelector(".navigation").classList.toggle("expanded");
    hamburgerElement.classList.toggle('closer');
  });
}

module.exports = { handleNavMenu }
