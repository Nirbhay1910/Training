const http = require("http");
const path = require("path");
const rootDir = require("./util/helper");

const bodyParser = require("body-parser"); //will allow us to use req.body
const express = require("express");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const errorController = require("./controllers/error");
// const expressHbs = require("express-handlebars");

const app = express();

// app.engine("hbs", expressHbs()); //This will tell express that handlebars is new engine
//Note whatever you have put in "hbs" will be used as extension for file like 404.hbs
//We didn't need it in case of pugs as it is already defined engine in express
app.set("view engine", "ejs");
// app.set("view engine", "pug"); //is used to set keys, config values so that it can be used across the site
app.set("views", "views"); //telling where our views are. by default is is views only

app.use(express.static(path.join(rootDir, "public")));

app.use(bodyParser.urlencoded({ extended: true })); //this middleware will automatically parse the data for us and call next() at the end

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404page);
app.listen(3000, () => {
  console.log("Listening to port 3000");
});
// module.exports = path.dirname(require.main.filename);

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
