const enterInput = document.querySelector("#validation-input");

enterInput.addEventListener("blur", onBlurInput);

function onBlurInput(evt) {
  const input = evt.currentTarget;
  input.classList.remove("valid", "invalid");
  const userText = input.value.trim();

  if (userText.length === Number(input.getAttribute("data-length"))) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
