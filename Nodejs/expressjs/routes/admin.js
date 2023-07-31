const path = require("path");
const express = require("express");

const productsController = require("../controllers/products");
// const rootDir = require("../util/helper");

const router = express.Router();

// router.get("/add-product", (req, res) => {
//   // res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
//   // res.sendFile(path.join(rootDir, "views", "add-product.html"));
//   res.render("add-product", {
//     pageTitle: "Add Product",
//     path: "/admin/add-product",
//   });
// });
router.get("/add-product", productsController.getAddProduct);
router.post("/add-product", productsController.postAddProduct);
module.exports = router;
