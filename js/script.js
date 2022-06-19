let burger = document.querySelector(".burger");
let navbarToggler = document.querySelector(".navbar-toggler");
let navbarCollapse = document.querySelector(".navbar-collapse");

navbarToggler.addEventListener("click", () => {
  burger.classList.toggle("trans");
  navbarCollapse.classList.toggle("menu-go");
});


$('.accessories').flickity({
  freeScroll: true,
  contain: true,
  pageDots: false,
  wrapAround: true,
  cellAlign: 'left'
});
