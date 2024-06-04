const postsRouter = require("./posts");
const aboutRouter = require("./about");
const homeRouter = require("./home");

const route = (app) => {
  app.get("/", homeRouter);

  app.use("/posts", postsRouter);

  app.use("/about", aboutRouter);
};

module.exports = route;
