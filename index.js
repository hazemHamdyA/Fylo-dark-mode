const darkModeBtn = document.querySelector("[data-moon]");
const lightModeBtn = document.querySelector("[data-sun]");

lightModeBtn.addEventListener("click", function () {
  this.classList.add("hidden");
  darkModeBtn.classList.remove("hidden");
  document.documentElement.classList.remove("dark");
});

darkModeBtn.addEventListener("click", function () {
  this.classList.add("hidden");
  lightModeBtn.classList.remove("hidden");
  document.documentElement.classList.add("dark");
});

// window.addEventListener("resize", function () {
//   document.documentElement.clientWidth <= 375 ? console.log("done") : "";
// });
