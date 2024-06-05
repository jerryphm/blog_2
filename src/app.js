const express = require("express");
const expressHandlebars = require("express-handlebars");
const path = require("path");
const route = require("./routes");
const db = require("./config/db");

const app = express();
db.connect();

app.engine("handlebars", expressHandlebars.engine());
app.set("view engine", "handlebars");
app.set("views", "src/views");

app.use(express.static(path.join(__dirname, "static")));

route(app);

const port = 3000;
app.listen(port, () => console.log(`listening at ${port}\n`));
