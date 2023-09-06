let form = document.querySelector(".email-form");
let warning = document.querySelector(".warning");
let dismiss = document.querySelector(".dismiss-button");
let sign_up = document.querySelector(".sign-up");
let success = document.querySelector(".success");
let input_email = document.querySelector(".email-input");

function validateEmail(email) {
  var regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(email);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  var email_input = event.target.email["value"];
  if(!(validateEmail(email_input))){
    warning.style.display = "inline";
    input_email.classList.add("error-state");
    console.log(input_email)
  }else{
    sign_up.style.display = "none";
    success.style.display = "flex";
  }
});

dismiss.addEventListener("click",(event) => {
    window.location.reload();
})
