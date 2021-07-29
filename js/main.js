let swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
let swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
});

const menuBtn = document.querySelector('.menu-button');
const menuClose = document.querySelector('.close-menu');
const menu = document.querySelector('.navbar-pannel');
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('is-open');
});

menuClose.addEventListener('click', () => {
  menu.classList.toggle('is-open');
});