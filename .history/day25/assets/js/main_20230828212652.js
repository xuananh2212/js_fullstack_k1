const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnPrev = $(".prev");
const btnNext = $(".next");
const carouselItems = [...$$(".carousel__items")];
const carouselInner = $(".carousel__inner");
const dots = $(".dots");

if (carouselItems) {
  carouselItems.forEach((items, index) => {
    var html = `<div class="dot__item"></div>`;
    dots.insertAdjacentHTML("beforeend", html);
  });
}
