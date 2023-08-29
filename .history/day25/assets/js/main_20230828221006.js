const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnPrev = $(".prev");
const btnNext = $(".next");
const carousel = $(".carousel");
const carouselItems = [...$$(".carousel__items")];
const carouselInner = $(".carousel__inner");
const dots = $(".dots");
var position = 0;
var totalWidth = carousel.offsetWidth * carouselItems.length;
var index = 0;

if (carouselItems) {
  carouselItems.forEach((items, index) => {
    var html = `<div class="dot__item" data-index=${index}></div>`;
    dots.insertAdjacentHTML("beforeend", html);
  });
  dots.firstElementChild && dots.firstElementChild.classList.add("active");
}
const dotItems = [...$$(".dot__item")];

function moveSlide() {
  carouselInner.style.translate = `${position}px`;
  dotItems.forEach((dot) => dot.classList.remove("active"));
  const dotFocus = dotItems.find(
    (dot) => parseInt(dot.dataset.index) === index
  );
  dotFocus.classList.add("active");
}

function hanldeBtn(btn) {
  if (btn === 1) {
    if (Math.abs(position) < totalWidth - carousel.offsetWidth) {
      index++;
      position -= carousel.offsetWidth;
      moveSlide();
    }
  } else {
    if (position < 0) {
      index--;
      position += carousel.offsetWidth;
      moveSlide();
    }
  }
}

btnNext.addEventListener("click", function (e) {
  hanldeBtn(1);
});
btnPrev.addEventListener("click", function (e) {
  hanldeBtn(-1);
});

dotItems.forEach((dot) => {
  dot.addEventListener("click", function (e) {
    var index = dot.dataset.index;
    position = -1 * (index * carousel.offsetWidth);
    carouselInner.style.translate = `${position}px`;
    dotItems.forEach((dot) => dot.classList.remove("active"));
    dot.classList.add("active");
  });
});
