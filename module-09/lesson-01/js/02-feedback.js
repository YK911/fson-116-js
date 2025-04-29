//* Form data constructor

const STORAGE_KEY = "feedback-msg";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");

populateTextarea();

form.addEventListener("submit", handleFormSubmit);
// form.addEventListener("change", handleFormInput);
form.addEventListener("focusout", handleFormInput);

/**
 * - Скасовуємо стандартну поведінку
 * - Видаляємо повідомлення зі сховища
 * - Очищуємо форму
 */
function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;

  localStorage.removeItem(STORAGE_KEY);

  form.reset();
}

/**
 * - Отримуємо значення поля
 * - Зберігаємо його у сховище
 */

// function handleTextareaInput(event) {
//   const message = event.currentTarget.value;
//   localStorage.setItem(STORAGE_KEY, message);
// }

function handleFormInput(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

/**
 * - Отримуємо значення зі сховища
 * - Якщо там щось було, оновлюємо DOM
 */

function populateTextarea() {
  // const message = localStorage.getItem(STORAGE_KEY);
  const savedLSData = localStorage.getItem(STORAGE_KEY);

  // Паттерн "Раннє повернення"
  // if (message === null) {
  //   return;
  // }

  if (!savedLSData) return;

  try {
    // textarea.value = message;
    const dataFromLS = JSON.parse(savedLSData);
    const formEl = new FormData(form);
    const formFields = Array.from(formEl.keys());

    formFields.forEach((field) => {
      // console.log(field);
      form.elements[field].value = dataFromLS[field];
    });
  } catch (error) {
    alert("⚠️ Opps... Some error occurs");
  }
}

// const profile = {
//   userName: "Mango",
//   playtime: 200,
//   isOnline: true,
// };

// console.log(profile.isOnline);
// console.log(profile["isOnline"]);

// const key = "playtime";

// // Обчислювані властивості обʼєкта
// console.log(profile[key]);
