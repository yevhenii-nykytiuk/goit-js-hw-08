import throttle from "lodash.throttle";


const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
const STORAGE_KEY = "feedback-form-state";
const formData = {
  email: "",
  message: "",
};

updateStorage();

form.addEventListener("submit", hendleOnSubmitForm);
form.addEventListener("input", throttle(hendleOnInput, 500));

function hendleOnInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function hendleOnSubmitForm(e) {

  if (emailInput.value === "" || message.value === "") {
    alert("Заповніть поля!");
    return;
  }
  e.preventDefault();
  e.currentTarget.reset();
  console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
}

function updateStorage() {
  const getItem = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (getItem) {
    return;
  } 
  emailInput.value = getItem.message || "";
  message.value = getItem.email || "";
  formData.email = getItem.email || "";
  formData.message = getItem.message || "";
}



