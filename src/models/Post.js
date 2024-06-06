const mongoose = require("mongoose");
const slugGenerator = require("mongoose-slug-generator");

mongoose.plugin(slugGenerator);
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    thumbnail: { type: String, require: true },
    slug: { type: String, slug: "title" },
    video: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
