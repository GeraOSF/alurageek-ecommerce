function goToViewAllPage(e) {
  const category = e.target.id;
  window.location.href = `../pages/view-all.html?category=${category}`;
}

function productHeader(category) {
  const header = document.createElement("div");
  header.classList.add("product__header");
  header.innerHTML = `<h2 class="product__type">${category}</h2>
                      <a href="#" id="${category}" class="view-all">View all <i class="fa-solid fa-arrow-right-long"></i></a>`;
  // Add event listener to view all button
  const viewAllBtn = header.querySelector(".view-all");
  viewAllBtn.addEventListener("click", goToViewAllPage);
  return header;
}

function productListItem(image, name, price) {
  if (window.location.pathname !== "index.html") {
    image = "../" + image;
  }
  const item = document.createElement("li");
  item.classList.add("product__list__element");
  item.innerHTML = `<img src="${image}" alt="Product image" class="product__list__element--image">
                      <p class="product__name">${name}</p>
                      <p class="product__price">$ ${price}</p>
                    <div>
                      <a href="#" class="product__view-product">View product</a>
                    </div>`
  return item;
}

export const makeElement = {
  productHeader,
  productListItem
}