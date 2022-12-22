const title = document.getElementsByClassName("title");
const error_text = document.getElementsByClassName("error-text");
const usernameInput = document.getElementById("login-usuario");
const passwordInput = document.getElementById("login-senha");

// função de validação do login
function validateForms() {
  if (usernameInput.value !== "edvansabino") {
    error_text[0].classList.add("visible");
  }
  if (passwordInput.value !== "123") {
    error_text[1].classList.add("visible");
  }
}

validateForms();
