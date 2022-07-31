// Validate contact us form
const contactForm = document.getElementById("contact-us__form");
const inputName = document.getElementById("name");
const inputMessage = document.getElementById("message");

const validityErrors = [
  "valueMissing",
  "typeMismatch"
];
const errorMessages = {
  name: {
    valueMissing: "Please fill out your name or company name"
  },
  message: {
    valueMissing: "Please fill out your message in this field"
  }
}

function checkValidity(e) {
  // Get type of data from "data-" in HTML
  const dataType = this.dataset.type;
  const errorMessage = e.composedPath()[2].querySelector(".form__error-message");
  const inputContainer = e.composedPath()[1];
  let errorFound = false;
  validityErrors.forEach((validityError) => {
    if (this.validity[validityError]) {
      errorMessage.textContent = errorMessages[dataType][validityError];
      inputContainer.style.borderColor = "red";
      errorFound = true;
      return;
    }
  });
  if (errorFound) return;
  errorMessage.textContent = '';
  inputContainer.style.borderColor = "transparent";
}

inputName.addEventListener("blur", checkValidity);
inputMessage.addEventListener("blur", checkValidity);