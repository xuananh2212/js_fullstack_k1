import { gets, getPosts } from "./crud.js";
import { loadWrap } from "./renderUi.js";
export let _limit = 5;
export let _page = 1;
export let totalPage = null;

getPosts(_limit, _page).then(function () {
  loadWrap.classList.remove("is-loading");
});

async function getPostsLength() {
  const data = await gets({}, "posts");
  totalPage = Math.ceil(data.length / _limit);
  window.addEventListener("scroll", function (e) {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    console.log(scrollHeight, scrollTop, clientHeight);
    if (clientHeight + scrollTop >= scrollHeight - 1) {
      console.log("chay");
      console.log(_page, totalPage);
      if (_page === totalPage) {
        _page = 0;
      }
      getPosts(_limit, ++_page);
    }
  });
}

getPostsLength();
