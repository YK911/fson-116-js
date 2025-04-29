// console.log("Before error");

const description =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, maiores!";

// console.log(JSON.stringify(description));

const userProfile = {
  name: "Mango",
  age: 24,
  hobbies: ["tennis", "football", "swimming"],
  isHappy: true,
  // "hasFriends": undefined,
  // "hasFriends": null,
  favouriteBook: {
    title: "Harry Potter",
    author: "Joan Roaling",
    pages: 100,
  },
  showName() {
    console.log(this.name);
  },
};

const result = JSON.stringify(userProfile);
// console.log(" result:", typeof result);

// console.log(JSON.parse(result));

// console.log(JSON.stringify(showName));
// const profile = undefined;
// console.log(profile);

// const profileToJSON = JSON.stringify(profile);
// console.log(" profileToJSON:", profileToJSON);

/**
 * LocalStorage
 */

const LS_KEY = "Array of names";

const names = ["Alice", "Kate", "Emma"];

/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

localStorage.setItem(LS_KEY, JSON.stringify(names));

/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

const ls_result = localStorage.getItem(LS_KEY);
// console.log(" ls_result:", JSON.parse(ls_result));

/**
 * Видалення
 */
const LS_THEME = "User Theme";
const userTheme = {
  theme: "light",
  font: 2,
  isDarkThemeActive: false,
};

const notification = {
  email: true,
  telegram: false,
  viber: true,
  sms: true,
};

// const userThemeToJSON = JSON.stringify(userTheme);
// localStorage.setItem(LS_THEME, userThemeToJSON);

localStorage.setItem(LS_THEME, JSON.stringify(userTheme));
// localStorage.setItem(LS_THEME, JSON.stringify(notification));

// setTimeout(() => {
//   localStorage.removeItem(LS_THEME);
// }, 2000);

// setTimeout(() => {
//   localStorage.clear();
// }, 3000);

/**
 * LocalStorage не може зберігати функції
 */
function add(a, b) {
  return a + b;
}

localStorage.setItem("my super function", JSON.stringify(add));

const mySuperFunction = localStorage.getItem("my super function");
// console.log(" mySuperFunction:", mySuperFunction);

console.log("Before try...catch");

try {
  console.log("Loading...");

  // const responseFromBackend = JSON.parse("String with error");
  // console.log(" responseFromBackend:", responseFromBackend);
  const response = Math.random();
  console.log(" response:", response);

  if (response < 0.5) {
    setTimeout(() => {
      throw new Error("❌ Custom error");
    }, 5000);
  }

  console.log("Worked");
} catch (error) {
  // console.log("Here");
  // alert("Opps... something went wrong ❌");
  // console.warn(error.message);
  // console.warn(error.stack);
  alert(error.message);
} finally {
  console.log("Loading finished");
}

console.log("After try...catch");

function orderDish(dish) {
  // dish = "scrambleEggs"
  return function makeDish(shiefName) {
    return `Shief ${shiefName} are cooking ${dish}`;
  };
}

const scrambleEggs = orderDish("scrambleEggs");

const result1 = scrambleEggs("Mango");
console.log(" result1:", result1);
