import { client } from "./client.js";
const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

let LIMIT_NUMBER = 1;
let PAGE_NUMBER = 1;
let totalCorrect = 0;
let indexCorrect = 0;

export const btnStart = $(".btn-start");
export const startGame = $(".start-game");
export const questions = $(".questions");
export const container = $(".container");
export const divBottom = $(".container .bottom");
export const divTotal = $(".total-game");
function RenderCorrectBottom() {
  divBottom.innerHTML = "";
  var html = `<span>CORRECT</span>`;
  divBottom.innerHTML = html;
  divBottom.className = "bottom";
  container.append(divBottom);
}

function RenderTotal() {}

function HanldDisplay() {
  const btnAll = $$(".btn:not(.correct , .incorrect)");
  btnAll.forEach((btn) => {
    btn.classList.add("is-hidden");
  });
  PAGE_NUMBER++;
  RenderUi();
}

function HanldQuestions(e, numberCorrect) {
  e.target.style.pointerEvents = "none";
  if (e.target.dataset.correct === "true") {
    indexCorrect++;
    console.log(indexCorrect);
    e.target.classList.add("correct");
    if (numberCorrect === 1) {
      totalCorrect++;
      divBottom.classList.add("is-show");
      divBottom.classList.add("correct");
      HanldDisplay();
    } else if (indexCorrect === numberCorrect) {
      totalCorrect++;
      divBottom.classList.add("is-show");
      divBottom.classList.add("correct");
      HanldDisplay();
    }
  } else {
    divBottom.classList.add("is-show");
    const spanInCorrect = $(".bottom span");
    spanInCorrect.innerHTML = "INCORRECT";
    e.target.classList.add("incorrect");
    divBottom.classList.add("incorrect");
    const btnCorrects = $$('.btn[data-correct="true"]');
    btnCorrects.forEach((btnCorrect) => {
      btnCorrect.style.pointerEvents = "none";
      btnCorrect.classList.add("correct");
    });
    const btnAll = $$(".btn:not(.correct , .incorrect)");
    btnAll.forEach((btn) => {
      btn.classList.add("is-hidden");
    });
    HanldDisplay();
  }
}

function RenderHtml({ title, numberCorrect, answers }) {
  indexCorrect = 0;
  questions.innerHTML = "";
  var html = `<div class="title">
                <h2 class="heading-lv2">${title}</h2>
               ${
                 numberCorrect > 1
                   ? `<span class="value-correct">Số câu trả lời đúng: ${numberCorrect}</span>`
                   : ""
               }
            </div>`;
  questions.innerHTML = html;
  var div = document.createElement("div");
  div.className = "answers";
  answers.forEach((answer) => {
    var button = document.createElement("button");
    button.className = "btn";
    button.setAttribute("data-correct", answer.correct);
    button.innerHTML = answer.text;
    div.append(button);
    button.addEventListener("click", (e) => {
      RenderCorrectBottom();
      HanldQuestions(e, numberCorrect);
    });
  });
  questions.append(div);
}

export function RenderUi() {
  var options = {
    _limit: LIMIT_NUMBER,
    _page: PAGE_NUMBER,
    _order: "desc",
  };
  var queryString = new URLSearchParams(options).toString();
  const getQuestions = client.get("/questions/?" + queryString);
  getQuestions.then(({ data }) => {
    if (data.length > 0) {
      RenderHtml(data[0]);
      RenderCorrectBottom();
    } else {
      container.classList.add("is-hidden");
      RenderTotal();
    }
  });
}
