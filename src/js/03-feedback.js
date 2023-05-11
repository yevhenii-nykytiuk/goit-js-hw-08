import throttle from "lodash.throttle";


const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
const STORAGE_KEY = "feedback-form-state";
const valueStorageObject = {};

updateStorage();

form.addEventListener("submit", hendleOnSubmitForm);
form.addEventListener("input", throttle(hendleOnInput, 500));

function hendleOnInput(e) {
  valueStorageObject[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(valueStorageObject));
}

function hendleOnSubmitForm(e) {
  e.preventDefault();
  console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

function updateStorage() {
  const getItem = localStorage.getItem(STORAGE_KEY);
  if (getItem) {
    const parseItem = JSON.parse(getItem);
    emailInput.value = parseItem.message;
    message.value = parseItem.email;
  }
}

