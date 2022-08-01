// Validate contact us form
const inputName = document.getElementById("name");
const inputMessage = document.getElementById("message");

const validityErrors = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch"
];
const errorMessages = {
  name: {
    valueMissing: "Please fill out your name or company name"
  },
  message: {
    valueMissing: "Please fill out your message in this field"
  },
  email: {
    valueMissing: "Please fill out your email in this field",
    typeMismatch: "Invalid email",
    patternMismatch: "Invalid email"
  },
  password: {
    valueMissing: "Please fill out your password in this field"
  }
}

export default function validateInput(e) {
  const dataType = this.id; // Get data type from the id name of the element
  const errorMessage = e.composedPath()[2].querySelector(".form__error-message");
  const inputContainer = e.composedPath()[1];
  // Check for validity of the input with each of the validity errors
  for (let i = 0; i < validityErrors.length; i++) {
    if (this.validity[validityErrors[i]]) {
      errorMessage.textContent = errorMessages[dataType][validityErrors[i]];
      inputContainer.style.borderColor = "red";
      return;
    }
  }
  errorMessage.textContent = '';
  inputContainer.style.borderColor = "transparent";
}

inputName.addEventListener("blur", validateInput);
inputMessage.addEventListener("blur", validateInput);
