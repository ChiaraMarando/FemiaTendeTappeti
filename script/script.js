// SELLEZIONE ELEMENTI
const menuContainer = document.querySelector(".menu-container");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const closeBtn = document.querySelector(".close-btn");
const menuLinks = document.querySelectorAll(".menu-list a");

//FUNZIONI

function openMenu() {
  menuContainer.classList.add("is-open");
  document.body.classList.add("no-scroll");
}

function closeMenu() {
  menuContainer.classList.remove("is-open")
  document.body.classList.remove("no-scroll");
}

//EVENT LISTENERS

hamburgerBtn.addEventListener("click", openMenu)
closeBtn.addEventListener("click", closeMenu)
menuLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});