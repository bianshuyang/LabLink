const container = document.querySelector(".container");
const signInBtn = document.querySelector(".blue-bg button");
const blueBgDiv = document.querySelector(".logo-2");

signInBtn.addEventListener("click", () => {
  container.classList.toggle("change");
  blueBgDiv.classList.toggle("change");
});
