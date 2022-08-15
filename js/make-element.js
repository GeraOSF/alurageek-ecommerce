function productHeader(category) {
  const header = document.createElement("div");
  header.classList.add("product__header");
  header.innerHTML = `<h2 class="product__type">${category}</h2>
                      <a href="#" class="view-all">View all <i class="fa-solid fa-arrow-right-long"></i></a>`
  return header;
}

function productListItem(image, name, price) {
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