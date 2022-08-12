function getProducts() {
  return fetch("http://localhost:3000/products")
    .then(res => res.json());
}

export const services = {
  getProducts,
}
