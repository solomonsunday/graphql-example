const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.99,
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue jeans",
    price: 55.89,
    reviews: [],
  },
];

function getAllproducts() {
  return products;
}

function getProductByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}
function getProductById(id) {
  return products.find((product) => {
    return product.id === id;
  });
}

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  };

  products.push(newProduct);
  return newProduct;
}

function addProductReview(id, rating, comment) {
  const product = getProductById(id);

  if (product) {
    const newProductReview = {
      rating,
      comment,
    };
    product.reviews.push(newProductReview);
    return newProductReview;
  }
}

module.exports = {
  getAllproducts,
  getProductByPrice,
  getProductById,
  addNewProduct,
  addProductReview,
};
