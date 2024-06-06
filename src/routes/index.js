const postsRouter = require("./posts");
const aboutRouter = require("./about");
const homeRouter = require("./home");
const meRouter = require("./me");

const route = (app) => {
  app.get("/", homeRouter);

  app.use("/posts", postsRouter);

  app.use("/about", aboutRouter);

  app.use("/me", meRouter);
};

module.exports = route;
