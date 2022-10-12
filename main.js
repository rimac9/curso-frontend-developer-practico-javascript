const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) {  /*abierto */
    aside.classList.add("inactive");  /*Cerramos */
  }
  mobileMenu.classList.toggle("inactive"); /* categoria */
}
function toggleCarritoAside() {
  const isMovileMenuClosed = mobileMenu.classList.contains("inactive");
   console.log('que '+ !isMovileMenuClosed);
  if (!isMovileMenuClosed) { /*abierto */
    mobileMenu.classList.add("inactive");   /*cerramos */
  }
  aside.classList.toggle("inactive"); 
}










/* navEmail.addEventListener('click', () => {
    menuDesktop.classList.toggle('inactive');
}); */
