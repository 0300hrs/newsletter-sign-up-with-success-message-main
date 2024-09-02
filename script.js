// function display() {
//   let email = document.getElementById("email");
//   let mainMail = email.value;
//   document.getElementById("email").classList.toggle("border-warning");
//   document.getElementById("demail").innerText = mainMail;
//   document.getElementById("message").classList.toggle("non");
//   document.getElementById("confirmation").classList.toggle("non");
// }

function display() {
  let email = document.getElementById("email");
  let mainMail = email.value;

  // Regex pattern for a basic email validation
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the pattern
  if (emailPattern.test(mainMail)) {
    // Email is valid, proceed with other operations
    document.getElementById("demail").innerText = mainMail;
    document.getElementById("message").classList.toggle("non");
    document.getElementById("confirmation").classList.toggle("non");

    // Ensure the border-warning class is removed if present
    document.getElementById("email").classList.remove("border-warning");
  } else {
    // Email is invalid, toggle the border-warning class
    document.getElementById("email").classList.toggle("border-warning");
  }
}

function reset() {
  document.getElementById("email").value = "";
  document.getElementById("demail").innerText = "ash@loremcompany.com";
  document.getElementById("message").classList.toggle("non");
  document.getElementById("confirmation").classList.toggle("non");
}
