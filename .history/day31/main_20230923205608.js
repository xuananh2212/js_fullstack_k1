const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

const counter = $(".counter");
const btn = $(".btn");

let dateNow = new Date();
const dateEnd = new Date();
console.log(dateNow.getTime());
dateEnd.setTime(dateNow.getTime() + 30000);
// while (dateNow.getTime() <= dateEnd.getTime()) {
//   console.log("vao");
//   counter.innerHTML = Math.floor(
//     (dateEnd.getTime() - dateNow.getTime()) / 1000
//   );
//   dateNow = new Date();
// }
