let burger = document.querySelector(".burger");
let navbarToggler = document.querySelector(".navbar-toggler");
let navbarCollapse = document.querySelector(".navbar-collapse");
let salePrice = document.querySelectorAll(".sale-price");
let cardItem = document.querySelectorAll(".card-item");
let mainPrice = document.querySelectorAll(".main-price");

navbarToggler.addEventListener("click", () => {
  burger.classList.toggle("trans");
  navbarCollapse.classList.toggle("menu-go");
});



// Main page
$('.accessories').flickity({
  freeScroll: true,
  contain: true,
  pageDots: false,
  wrapAround: true,
  cellAlign: 'left'
});

// scooter main
$('.carousel-main').flickity({
  wrapAround: true,
  pageDots: false
});
$('.carousel-nav').flickity({
  freeScroll: true,
  asNavFor: '.carousel-main',
  contain: true,
  draggable: false,
  pageDots: false,
  prevNextButtons: false,
  cellAlign: 'center'
});


// icon sail
function sale() {
  for (let i = 0; i < salePrice.length; i++) {
    if (salePrice[i].innerHTML) {
      cardItem[i].classList.add("sale");
      mainPrice[i].classList.add("close-price");
    } else {
      cardItem[i].classList.remove("sale");
      mainPrice[i].classList.remove("close-price");
    }
  }

}
sale();