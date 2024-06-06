const express = require("express");
const PostModel = require("../models/Post.js");
const router = express.Router();

router.get("/", async (_, res) => {
  try {
    res.render("home");
  } catch (err) {
    res.status(404).json({ error: "Error!" });
  }
});


module.exports = router;
