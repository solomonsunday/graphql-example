const productModel = require("./products.model");
module.exports = {
  Query: {
    products: () => {
      return productModel.getAllproducts();
    },
    productsByPrice: (_, args) => {
      return productModel.getProductByPrice(args.min, args.max);
    },
    productById: (_, args) => {
      return productModel.getProductById(args.id);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      return productModel.addNewProduct(args.id, args.description, args.price);
    },
    addProductReview: (_, args) => {
      return productModel.addProductReview(args.id, args.rating, args.comment);
    },
  },
};
