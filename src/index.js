const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const app = express();
const port = 3000;
const route = require("./routes");

app.use(express.static(path.join(__dirname, "public"))); // link to public file

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// XMLHttpRequest, fetch, axios
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

// Route init
route(app);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
