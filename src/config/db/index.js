const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/blog";

const connect = async () => {
  try {
    await mongoose.connect(url);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connect };
