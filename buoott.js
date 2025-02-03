const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const imageCon = document.getElementById("image-content");
const newText = [
  "No",
  "Really???",
  "Sure ka ba??",
  "Ayaw mo na sa Jowa mo?",
  "PLEASEEE? T_T",
  "Loveee cge naaaa",
  "I love you pleaseee :((",
  "Loveee wag nman ganitoo :(",
  "LOVEEEEEEEEE",
];
let currentIndex = 0;

noButton.addEventListener("click", function () {
  const currentSize = window.getComputedStyle(yesButton).fontSize;

  const newSize = parseInt(currentSize) * 1.5;

  yesButton.style.fontSize = newSize + "px";

  noButton.textContent = newText[currentIndex];
  currentIndex = (currentIndex + 1) % newText.length;

  imageCon.src = "img/sadd - Copy.gif";
});