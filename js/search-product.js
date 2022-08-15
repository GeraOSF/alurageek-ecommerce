import { services } from "./services.js";

const searchInput = document.querySelector(".search-box");
const searchResults = document.querySelector(".search__results-container");

function makeProductListItem(image, name) {
  const item = document.createElement("li");
  item.classList.add("product__list__element");
  item.innerHTML = `<img src="${image}" alt="Product image" class="product__list__element--image">
                    <p class="product__name">${name}</p>
                    <div>
                      <a href="#" class="product__view-product">View product</a>
                    </div>`
  return item;
}

async function searchProduct() {
  if (this.value == '') {
    searchResults.innerHTML = '';
    searchResults.style.display = "none";
    return;
  }
  searchResults.style.display = "flex";
  const inputRegex = new RegExp(`${this.value}`, "gi");
  const products = await services.getProducts();
  searchResults.innerHTML = '';
  products.forEach(product => {
    if (inputRegex.test(product.name)) {
      searchResults.appendChild(makeProductListItem(product.image, product.name));
    }
  });
}

searchInput.oninput = searchProduct;
