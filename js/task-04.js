let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");
decrementBtn.addEventListener("click", onDecreaseBtnClick);
incrementBtn.addEventListener("click", onIncreaseBtnClick);
function onDecreaseBtnClick(event) {
  counterValue -= 1;
  value.textContent = counterValue;
}
function onIncreaseBtnClick(event) {
  counterValue += 1;
  value.textContent = counterValue;
}
