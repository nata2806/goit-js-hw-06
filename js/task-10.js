function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const createEl = document.querySelector("[data-create]");
const destroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");
const min = Number(inputEl.getAttribute("min"));
const max = Number(inputEl.getAttribute("max"));
const step = Number(inputEl.getAttribute("step"));
// * ======= Function of random HEX color =======
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
inputEl.addEventListener("input", onGetAmount);
createEl.addEventListener("click", onCreateBtn);
function onGetAmount(event) {
  createEl.value = event.currentTarget.value;
}
function onCreateBtn() {
  const value = Number(createEl.value);
  if (value < min || value > max) {
    alert(`Value must be a number between ${min} and ${max}`);
    return;
  }
  createBoxes(value);
}
function createBoxes(amount) {
  const boxArray = [];
  let boxSize = 30;
  if (amount > 0) {
    for (let i = 0; i < amount; i += step) {
      const boxEl = document.createElement("div");
      const color = getRandomHexColor();
      boxEl.style.width = `${boxSize}px`;
      boxEl.style.height = `${boxSize}px`;
      boxEl.style.backgroundColor = getRandomHexColor();
      boxSize += 10;
      boxArray.push(boxEl);
    }
  }
  boxesEl.append(...boxArray);
}
destroyEl.addEventListener("click", destroyBoxes);
// * ======= Function of random Box destroy =======
function destroyBoxes() {
  boxesEl.innerHTML = "";
  inputEl.value = "";
}
