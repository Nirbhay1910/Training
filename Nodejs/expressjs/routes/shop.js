const path = require("path");
const rootDir = require("../util/helper");

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "views", "shop.html")); //__dirname points to the folder which we are using so it is pointing to the routes folder here
  //Need path.join so that it can work on both mac and windows

  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
