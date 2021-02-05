const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'public')));// link to public file

//HTTP logger
app.use(morgan("combined")); // Show 'GET / HTTP/1.1" 304 - "-" "Mozilla/5.0...'

//Template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
