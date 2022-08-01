import validateInput from "./form-validation.js";

const loginForm = document.getElementById("login__form");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const notAdminErrMessage = document.querySelector(".not-admin__error-message");
  
inputEmail.addEventListener("blur", validateInput);
inputPassword.addEventListener("blur", validateInput);

async function getUsers() {
  return await fetch("http://localhost:3000/users")
    .then(res => res.json());
}

loginForm.addEventListener("submit", e => {
  e.preventDefault();
  // Fetch users and check if the user is in the database (is an admin)
  getUsers().then(users => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == inputEmail.value && users[i].password == inputPassword.value) {
        window.location.href = "../pages/admin-menu.html";
      }
    }
    notAdminErrMessage.style.visibility = "initial";
  });
});