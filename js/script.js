let menu = document.querySelector('#menu-btn')
let navBar = document.querySelector('.header .navbar')

menu.onclick = () => {
  menu.classList.toggle('fa-plus')
  navBar.classList.toggle('active')
}

window.onscroll = () => {
  menu.classList.remove('fa-plus')
  navBar.classList.remove('active')
}

// SLIDER
var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// REVIEW SLIDER
var swiper = new Swiper(".review-slider", {
  spaceBetween: 10,
  slidesPerView: 1.2,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Blogs SLIDER
var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 20,
  slidesPerView: 1.2,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});