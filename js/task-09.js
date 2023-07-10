function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector(".change-color");
const currentColorEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");
buttonEl.addEventListener("click", onBtnClick);
function onBtnClick(event) {
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  currentColorEl.textContent = newColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
