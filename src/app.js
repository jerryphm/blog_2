const express = require("express");
const expressHandlebars = require("express-handlebars");
const path = require("path");
const route = require("./routes");

const app = express();

app.engine("handlebars", expressHandlebars.engine());
app.set("view engine", "handlebars");
app.set("views", "src/views");

app.use(express.static(path.join(__dirname, "static")));

route(app);

const port = 3000;
app.listen(port, () => console.log(`listening at ${port}\n`));


const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "blog";

async function main() {
  // Use connect method to connect to the server
  console.log('start connecting')
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("documents");

  // the following code examples can be pasted here...

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());