const http = require("http");
const path = require("path");
const rootDir = require("./util/helper");

const bodyParser = require("body-parser"); //will allow us to use req.body
const express = require("express");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(express.static(path.join(rootDir, "public")));

app.use(bodyParser.urlencoded({ extended: true })); //this middleware will automatically parse the data for us and call next() at the end

///middlewares///
// app.use((req, res, next) => {
//   console.log("I am in middleware");
//   next(); //Important as otherwise code will stuck at this middleware
// });

// app.use((req, res, next) => {
//   console.log("I am in another middleware");
//   res.send("<h1>Hello from Express</h1>"); //in last middleware we dont have to use next
// });

/////Routes/////

//app.use() for generic middlewares
//app.get() for get request
//app.post() for post request and so on

// app.get("/add-product", (req, res) => {
//   console.log("/add-product");
//   res.send(
//     "<form action='/product' method='POST'><input type='text' name='message'><button type='submit'></button></form>"
//   );
//   //We are not using next() so that it does not run  "/" middleware
// });
// app.post("/product", (req, res, next) => {
//   console.log(req.body); /// express has body property which has input but it needs parsor for it
//   res.redirect("/"); //express will automatically set headers for us
// });
// app.use("/", (req, res, next) => {
//   //will work for every url that starts with '/'
//   // so solution to this is to use this route at the end
//   // console.log("inside / middleware");
//   res.send("<h1>Hello from Express</h1>");
// });

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(3000, () => {
  console.log("Listening to port 3000");
});
// module.exports = path.dirname(require.main.filename);
