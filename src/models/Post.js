const mongoose = require("mongoose");
const slugGenerator = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

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

// plugins
mongoose.plugin(slugGenerator);
PostSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: true,
});

module.exports = mongoose.model("Post", PostSchema);
