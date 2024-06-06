const express = require("express");
const expressHandlebars = require("express-handlebars");
const path = require("path");
const route = require("./routes");
const db = require("./config/db");
const methodOverride = require("method-override");

const app = express();
db.connect();

app.use(methodOverride("_method"));

app.engine(
  "handlebars",
  expressHandlebars.engine({
    helpers: {
      increaseByOne: (a) => a + 1,
    },
  })
);
app.set("view engine", "handlebars");
app.set("views", "src/views");

app.use(express.static(path.join(__dirname, "static")));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

route(app);

const port = 3000;
app.listen(port, () =>
  console.log(`Express web server running at port  ${port}\n`)
);
