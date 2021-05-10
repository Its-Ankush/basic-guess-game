"use strict";
let n = Math.trunc(Math.random() * 20) + 1;
console.log(`before again ${n}`);
let score = 20;
let hs = -1;
let t = document.querySelector(".number").textContent;
document.querySelector(".guess").focus();

let display = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = document.querySelector(".guess").value;
  document.querySelector(".guess").value = "";
  document.querySelector(".guess").focus();

  if (!guess) {
    display("🚫Not a number🚫");
  } else if (guess == n) {
    document.querySelector(".number").textContent = n;
    display("Correct Number╰(*°▽°*)╯");
    hs = Math.max(hs, score);
    document.querySelector(".highscore").textContent = hs;
    document.querySelector(`body`).style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "15rem";
  } else if (guess != n) {
    if (score > 0) {
      document.querySelector(".message").textContent =
        guess > n ? "Too High ⬆ ⏫" : "Too Low ⬇ ⏬";
      score--;
      if (score == 0) {
        document.querySelector(`.score`).textContent = score;
        display("You Lost ¯\\_(ツ)_/¯ ");
        return;
      }
      document.querySelector(`.score`).textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  n = Math.trunc(Math.random() * 20) + 1;
  console.log(`after agian ${n}`);
  document.querySelector(".number").textContent = t;
  document.querySelector(`body`).style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".guess").focus();
  score = 20;
  document.querySelector(`.score`).textContent = score;
  display("Start guessing...");
  document.querySelector(".number").style.width = "15rem";
});
