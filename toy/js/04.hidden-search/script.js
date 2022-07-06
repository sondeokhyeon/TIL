const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});

// search.addEventListener("mouseover", () => {
//   search.classList.add("active");
//   input.focus();
// });

// search.addEventListener("mouseleave", () => {
//   search.classList.remove("active");
// });
