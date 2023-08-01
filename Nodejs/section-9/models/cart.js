const fs = require("fs");
const path = require("path");

const p = path.join(path.dirname(require.main.filename), "data", "cart.json");

const getFullCart = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    let cart = { products: [], totalPrice: 0 };
    if (err) {
      return cart;
    }
    cb(JSON.parse(fileContent));
  });
};

module.exports = class Cart {
  static addProducts(id, prodPrice) {
    //Fetch the eprevious cart
    getFullCart((cart) => {
      let existingProductIndex = cart.products.findIndex((p) => p.id === id);
      let existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = {
          id: id,
          qty: 1,
        };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice = cart.totalPrice + +prodPrice; //+prodPrice to convert it into number
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }

  static deleteProduct(id, price) {
    getFullCart((cart) => {
      const updatedCart = { ...cart };
      let product = cart.products.find((prod) => prod.id === id);
      if (!product) return;
      let productQty = product.qty;
      updatedCart.totalPrice = updatedCart.totalPrice - productQty * price;
      updatedCart.products = updatedCart.products.filter(
        (prod) => prod.id !== id
      );
      fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
        console.log(err);
      });
    });
  }

  static getCart = (cb) => {
    getFullCart((cart) => {
      cb(cart);
    });
  };
};
