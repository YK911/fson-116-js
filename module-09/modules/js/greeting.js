// Named export

export function greeting(selector = "", name = "") {
  const element = document.querySelector(selector);
  element.textContent = `Hello, ${name}`;
}

export function collectFormData(formSelector = "") {
  const form = document.querySelector(formSelector);
  const formData = new FormData(form);
  const userData = Object.fromEntries(formData.entries());
  return userData;
}

// export function greeting(selector = "", name = "") {
//   const element = document.querySelector(selector);
//   element.textContent = `Hello, ${name}`;
// }

// function collectFormData(formSelector = "") {
//   const form = document.querySelector(formSelector);
//   const formData = new FormData(form);
//   const userData = Object.fromEntries(formData.entries());
//   return userData;
// }

// export default collectFormData;
