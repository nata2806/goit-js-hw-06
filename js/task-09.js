function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
console.dir(body);

const changeColorBtn = document.querySelector(".change-color");

const nameColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", onChangeColorBtn);

function onChangeColorBtn(evt) {
  const newColor = getRandomHexColor();

  body.style.backgroundColor = newColor;

  nameColor.textContent = newColor;
}
