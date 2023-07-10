const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", onInputBlur);
const inputLength = Number(inputEl.dataset.length);
function onInputBlur() {
  if (inputEl.value.trim().length === inputLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
