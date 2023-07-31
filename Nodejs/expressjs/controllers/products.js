const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};
exports.postAddProduct = (req, res, next) => {
  // products.push({ title: req.body.title });
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};
exports.getProducts = (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "views", "shop.html")); //__dirname points to the folder which we are using so it is pointing to the routes folder here
  //Need path.join so that it can work on both mac and windows
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
