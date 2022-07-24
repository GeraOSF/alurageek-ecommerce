const searchContainer = document.querySelector(".search__container");
const searchBox = document.querySelector(".search-box");

searchBox.addEventListener("focus", () => {
  searchContainer.style.borderColor = "#2A7AE4";
});

searchBox.addEventListener("blur", () => {
  searchContainer.style.borderColor = "transparent";
});
