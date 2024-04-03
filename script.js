let inputs = document.querySelectorAll("input");
let password = document.querySelector("#password");
let passwordConfirm = document.querySelector("#password-confirm");
let passwordInfo = document.querySelector(".password-info");

inputs.forEach(input => {
  input.addEventListener("input", function() {
    if (input.validity.valid) {
      input.nextElementSibling.classList.remove("invalid");
      input.nextElementSibling.classList.add("valid");
      input.nextElementSibling.innerText = "✔";
    } else {
      input.nextElementSibling.classList.remove("valid");
      input.nextElementSibling.classList.add("invalid");
      input.nextElementSibling.innerText = "✗";
    }
  });
});


function checkPassword() {
  let passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
  if (password.value === passwordConfirm.value && passwordRegex.test(password.value)) {
    password.nextElementSibling.classList.remove("invalid");
    password.nextElementSibling.classList.add("valid");
    password.nextElementSibling.innerText = "✔";
    passwordConfirm.nextElementSibling.classList.remove("invalid");
    passwordConfirm.nextElementSibling.classList.add("valid");
    passwordConfirm.nextElementSibling.innerText = "✔";
    passwordInfo.innerText = "";
  } else {
    password.nextElementSibling.classList.remove("valid");
    password.nextElementSibling.classList.add("invalid");
    password.nextElementSibling.innerText = "✗";
    passwordConfirm.nextElementSibling.classList.remove("valid");
    passwordConfirm.nextElementSibling.classList.add("invalid");
    passwordConfirm.nextElementSibling.innerText = "✗";
    passwordInfo.innerText = "Your password must be at least 8 characters long and contain at least one number, one symbol and one capital letter.";
  }
}

password.addEventListener("input", checkPassword);
passwordConfirm.addEventListener("input", checkPassword);
