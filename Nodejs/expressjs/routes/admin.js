const path = require("path");
const express = require("express");
const rootDir = require("../util/helper");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res) => {
  // res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
});
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});
exports.router = router;
exports.products = products;
