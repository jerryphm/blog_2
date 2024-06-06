const express = require("express");
const router = express.Router();
const PostModel = require("../models/Post.js");

router.put("/posts/:id/update", async (req, res) => {
  try {
    await PostModel.updateOne({_id: req.params.id}, req.body)
    res.redirect("/me/posts")
  } catch (err) {
    res.status(404).json({ error: "ERROR!" });
  }
});

router.get("/posts/:id/edit", async (req, res) => {
  try {
    const _id = req.params.id;
    const post = await PostModel.findOne({ _id }).lean();
    res.render("me/updatePost", { post });
  } catch (err) {
    console.log("err", err);
    res.status(404).json({ error: "ERROR!" });
  }
});

router.get("/posts", async (_, res) => {
  try {
    const posts = await PostModel.find({}).lean();
    res.render("me/posts", { posts });
  } catch (err) {
    res.status(404).json({ error: "ERROR!" });
  }
});

module.exports = router;
