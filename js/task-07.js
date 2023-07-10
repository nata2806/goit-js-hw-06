const inputValueEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
inputValueEl.addEventListener("input", () => {
  const fontSize = inputValueEl.value + "px";
  textEl.style.fontSize = fontSize;
});
const initialFontSize = inputValueEl.value + "px";
textEl.style.fontSize = initialFontSize;
