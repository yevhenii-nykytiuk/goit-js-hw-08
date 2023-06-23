import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const formOnSubmit = document.querySelector(".feedback-form");


let objectData = {}


updateStorage();

formOnSubmit.addEventListener("input", throttle(hendleOnInput, 500));
formOnSubmit.addEventListener("submit", hendleOnSubmitForm);


function hendleOnInput(e) {

  objectData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

  objectData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(objectData));
}


function hendleOnSubmitForm(e) {

  e.preventDefault();

  let form = e.target.elements;

  let email = form.email.value;
  let message = form.message.value;

  if (email === "" || message === "") {
    alert("Заповніть поля!");
    return;
  }

  e.currentTarget.reset();

  console.log(objectData);

  localStorage.removeItem(STORAGE_KEY);
}

function updateStorage() {
  const getItem = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!getItem) {
    return;
  }

  objectData = getItem;
  
  formOnSubmit.email.value = objectData.email || '';
  formOnSubmit.message.value = objectData.message || '';
}




