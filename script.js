const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const submitBtn = document.querySelector("#submit-btn");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");

};

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");

};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");

};

passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");

};



submitBtn.onclick = () => {
let isFirstNameOK = false;
let isLastNameOK = false;
let emailOK = false;
let passwordOK = false;

  if (firstNameInput.value === ""){
    firstNameInput.classList.add("is-invalid");
  }else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOK = true;
  }
  if (lastNameInput.value === ""){
    lastNameInput.classList.add("is-invalid");
  }else {
    lastNameInput.classList.add("is-valid");
    isLastNameOK = true;
  }
  if (true === validateEmail(emailInput.value)){
    emailInput.classList.add("is-valid");
    emailOK = true;
  }else {
    emailInput.classList.add("is-invalid");
  }
  if (passwordInput.value.length < 6){
    passwordInput.classList.add("is-invalid");
  }else {
    passwordInput.classList.add("is-valid");
    passwordOK = true;
  }

  if(isFirstNameOK && isLastNameOK && emailOK && passwordOK){
    alert("Registered successfully");
  }


};