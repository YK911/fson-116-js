import SimpleLightbox from "simplelightbox";
console.log(SimpleLightbox);

// Import default
import print from "./print.js";

// Named import
import { greeting, collectFormData } from "./greeting.js";

// Namespace import
// import * as greetModule from "./greeting.js";

// console.log(greetModule);

// Different exports
// import formData, { greeting } from "./greeting.js";

const isImport = Math.random() < 0.5;
console.log(" isImport:", isImport);

if (isImport) {
  let sayHi = await import("./dynamic.js");
  console.log(" sayHi:", sayHi);
}

// greetModule.greeting();
// greetModule.collectFormData();

setTimeout(() => {
  greeting(".js-title", "Mango");
}, 3000);

const result = collectFormData('[name="subscription"]');
console.log(" result:", result);

const userProfile = {
  name: "Poly",
  age: 16,
  socials: ["facebook", "twitter", "tiktok"],
  isOnlone: true,
};

print(userProfile);
