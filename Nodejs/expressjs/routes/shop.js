const path = require("path");
const rootDir = require("../util/helper");
const adminData = require("./admin");

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "views", "shop.html")); //__dirname points to the folder which we are using so it is pointing to the routes folder here
  //Need path.join so that it can work on both mac and windows
  const products = adminData.products;
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
  }); // we can use these keys inside template file as dynamic content
});

module.exports = router;
