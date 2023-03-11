const body = document.querySelector(".body");
const nav = document.querySelector(".nav");
const button = document.querySelector("button");

// button.addEventListener("click", backgroundChange);
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset > 0) {
    nav.classList.add("dark-mode");
  } else {
    nav.classList.toggle("dark-mode");
  }
  if (window.pageYOffset == 0) {
    nav.classList.add("scstop");
  }
});

// body.addEventListener("scroll", backgroundChange);
// function backgroundChange() {
//   clg
//   nav.classList.add("dark-mode");

// }

// const navbar = document.getElementById("navbar");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 0) {
//     navbar.classList.add("scrolled");
//   } else {
//     navbar.classList.remove("scrolled");
//   }
// });
