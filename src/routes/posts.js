const express = require("express");
const PostModel = require("../models/Post.js");
const router = express.Router();

router.get("/create", async (req, res) => {
  try {
    res.render("posts/createPost");
  } catch (err) {
    res.status(404).json({ error: "ERROR!" });
  }
});

router.post("/store", async (req, res) => {
  try {
    const newPost = new PostModel(req.body)
    await newPost.save()
    res.redirect('/posts')
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "ERROR!" });
  }
});

router.get("/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;
    const postDetail = await PostModel.findOne({ slug }).lean();
    res.render("posts/postDetail", { postDetail });
  } catch (err) {
    res.status(404).json({ error: "ERROR!" });
  }
});

router.get("/", async (_, res) => {
  try {
    const posts = await PostModel.find({}).lean();
    res.render("posts/posts", { posts });
  } catch (err) {
    res.status(404).json({ error: "ERROR!" });
  }
});

module.exports = router;
