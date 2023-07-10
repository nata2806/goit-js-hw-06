function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector("#controls");

const divBoxes = document.querySelector("#boxes");

const btnCreate = document.querySelector("[data-create]");

const btnDestroy = document.querySelector("[data-destroy]");

btnCreate.addEventListener("click", onCreateBtn);

btnDestroy.addEventListener("click", onDestroyBtn);

function createBoxes(amount) {
  let newDivs = "";
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();

    newDivs += `<div class="new-div" style="width:${size}px; height:${size}px; background-color:${color}"></div> `;
    size += 10;
  }
  divBoxes.insertAdjacentHTML("beforeend", newDivs);
}

function onCreateBtn(evt) {
  const amount = container.firstElementChild.value;
  createBoxes(amount);
}

function onDestroyBtn(evt) {
  divBoxes.innerHTML = "";
  container.firstElementChild.value = "";
}
