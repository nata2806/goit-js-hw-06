const loginFormEl = document.querySelector(".login-form");
loginFormEl.addEventListener("submit", onSubmitBtnClick);
function onSubmitBtnClick(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value.trim() === "" || password.value.trim() === "") {
    alert`All fields must have allowable values`;
  } else {
    const loginData = {
      email: email.value,
      password: password.value,
    };
    console.log(loginData);
    loginFormEl.reset();
  }
}
