const express = require("express");
const router = express.Router();
const PostModel = require("../models/Post.js");

router.delete("/posts/trash/bulk-delete", async (req, res) => {
  try {
    await PostModel.deleteMany({ _id: { $in: req.body.ids } });
    res.redirect("back");
  } catch (err) {
    console.log('err', err)
    res.status(404).json({ error: "ERROR!" });
  }
});

router.patch("/posts/trash/bulk-restore", async (req, res) => {
  try {
    await PostModel.restore({ _id: { $in: req.body.ids } });
    res.redirect("back");
  } catch (err) {
    res.status(404).json({ error: "ERROR!" });
  }
});

router.put("/posts/:id/update", async (req, res) => {
  try {
    await PostModel.updateOne({ _id: req.params.id }, req.body);
    res.redirect("/me/posts");
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
    const deletedCount = await PostModel.countDocumentsWithDeleted({
      deleted: true,
    });
    res.render("me/posts", { posts, deletedCount });
  } catch (err) {
    res.status(404).json({ error: "ERROR!" });
  }
});

router.delete("/posts/:id/delete", async (req, res) => {
  try {
    await PostModel.delete({ _id: req.params.id });
    res.redirect("back");
  } catch (err) {
    res.status(404).json({ error: "ERROR!" });
  }
});

router.get("/posts/trash", async (_, res) => {
  try {
    const posts = await PostModel.findWithDeleted({ deleted: true }).lean();
    res.render("me/trash", { posts });
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "ERROR!" });
  }
});

router.patch("/posts/trash/:id/restore", async (req, res) => {
  try {
    await PostModel.restore({ _id: req.params.id });
    res.redirect("back");
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "ERROR!" });
  }
});

router.delete("/posts/trash/:id/force", async (req, res) => {
  try {
    await PostModel.deleteOne({ _id: req.params.id });
    res.redirect("back");
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: "ERROR!" });
  }
});

module.exports = router;
