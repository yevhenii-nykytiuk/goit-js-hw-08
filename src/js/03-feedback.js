import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const message = document.querySelector('textarea[name="message"]');
const emailInput = document.querySelector('input[name="email"]');



const formData = {
  email: '',
  message: '',
};

updateStorage();

form.addEventListener("input", throttle(hendleOnInput, 500));
form.addEventListener("submit", hendleOnSubmitForm);

function hendleOnSubmitForm(e) {

  if (emailInput.value === "" || message.value === "") {
    alert("Заповніть поля!");
    return;
  }
  e.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
  console.log(formData);
}

function hendleOnInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); 
}

function updateStorage() {
  const getItem = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (getItem === null) {
    return;
  } 
  emailInput.value = getItem.message || '';
  message.value = getItem.email || '';
  formData.email = getItem.email || '';
  formData.message = getItem.message || ''; 
}



