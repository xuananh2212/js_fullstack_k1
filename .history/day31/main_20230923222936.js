const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

const counter = $(".counter");
const btn = $(".btn");
var isFocus = false;
let dateNow = new Date();
const dateEnd = new Date();
dateEnd.setTime(dateNow.getTime() + 30000);

document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    console.log("Tab đã mất focus hoặc đang ẩn.");
  } else {
    console.log("Tab đã được chuyển về và có focus.");
  }
});
function countDown() {
  console.log("vao");
  counter.innerHTML = Math.floor(
    (dateEnd.getTime() - dateNow.getTime()) / 1000
  );

  dateNow = new Date();

  if (dateEnd.getTime() >= dateNow.getTime()) {
    requestAnimationFrame(countDown);
  } else {
    btn.classList.add("is-show");
  }
}
countDown();

btn.addEventListener("click", function (e) {
  window.location.href = "https://fullstack.edu.vn/";
});
