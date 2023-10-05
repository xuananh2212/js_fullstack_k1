import { getPosts } from "./crud.js";

let _limit = 5;
let _page = 1;

getPosts(_limit, _page);

window.addEventListener("scroll", function (e) {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  console.log(scrollHeight, scrollTop, clientHeight);
  if (clientHeight + scrollTop >= scrollHeight) {
    console.log("chay");
    getPosts(_limit, ++_page);
  }
});
