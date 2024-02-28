let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let solider = document.querySelector(".solider");

let canves = document.querySelector("#confetti");
const jsConfetti = new JSConfetti();

next.addEventListener("click", function () {
  jsConfetti.addConfetti({
    confettiRadius: 6,
    confettiNumber: 450,
  });
  let slides = document.querySelectorAll(".slides");
  solider.appendChild(slides[0]);
});
prev.addEventListener("click", function () {
  jsConfetti.addConfetti({
    confettiRadius: 6,
    confettiNumber: 450,
  });
  let slides = document.querySelectorAll(".slides");
  solider.prepend(slides[slides.length - 1]);
});