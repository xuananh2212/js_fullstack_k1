import { btnStart, startGame } from "./renderUi.js";
import { RenderUi, getQuestions } from "./renderUi.js";

btnStart.addEventListener("click", function (e) {
  startGame.classList.add("is-hidden");
  StartTimeGame();
});

function StartTimeGame() {
  const get = 
  var time = 5;
  var divTime = document.createElement("div");
  var spanValue = document.createElement("span");
  divTime.className = "start-times-game";
  spanValue.className = "value-time";
  spanValue.innerHTML = time;
  divTime.append(spanValue);
  document.body.append(divTime);

  var timeId = setInterval(function () {
    if (time === 1) {
      spanValue.innerHTML = "GO!";
      --time;
    } else if (time === 0) {
      divTime.classList.add("is-hidden");
      clearInterval(timeId);
    } else {
      spanValue.innerHTML = --time;
    }
  }, 1000);
}
