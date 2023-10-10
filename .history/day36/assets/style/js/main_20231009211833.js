import { btnStart, startGame } from "./renderUi.js";

btnStart.addEventListener("click", function (e) {
  startGame.classList.add("is-hidden");
  StartTimeGame();
});

function StartTimeGame() {
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
      console.log("dm");
      spanValue.innerHTML = "GO!";
    } else if (time === 0) {
      divTime.classList.add("is-hidden");
      clearInterval(timeId);
    } else {
      spanValue.innerHTML = --time;
    }
  }, 1000);
}
