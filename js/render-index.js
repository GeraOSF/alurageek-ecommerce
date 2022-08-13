import { services } from "./services.js";

function makeProductHeader(category) {
  return (
    `<div class="product__header">
        <h2 class="product__type">${category}</h2>
        <a href="#" class="view-all">View all <i class="fa-solid fa-arrow-right-long"></i></a>
    </div>`
  );
}

function makeProductListElement(image, name, price) {
  return (
    `<il class="product__list__element">
      <img src="${image}" alt="Product image" class="product__list__element--image">
      <p class="product__name">${name}</p>
      <p class="product__price">$ ${price}</p>
      <div>
        <a href="#" class="product__view-product">View product</a>
      </div>
    </il>`
  )
}

async function renderProducts() {
  const products = await services.getProducts();
  const productsByCategory = {};
  const categories = [];
  // Classify products by category
  products.forEach(product => {
    if (!productsByCategory[product.category]) {
      productsByCategory[product.category] = [];
      categories.push(product.category);
    }
    productsByCategory[product.category].push(product);
  });

  const productsSection = document.querySelector(".products");
  categories.forEach(category => {
    // For each category render a header
    const productHeader = makeProductHeader(category);
    productsSection.innerHTML += productHeader;
    // Create product list
    const productList = document.createElement("ul");
    productList.classList.add("product__list");
    productsSection.appendChild(productList);
    // Iterate over each product and add it 
    // to the list of the current category
    productsByCategory[category].forEach(product => {
      productList.innerHTML += makeProductListElement(product.image, product.name, product.price);
    });
  });
}

renderProducts();
