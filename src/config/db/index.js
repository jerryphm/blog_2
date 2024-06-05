const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/blog";

const connect = async () => {
  try {
    console.log("Start connecting...");
    await mongoose.connect(url);
    console.log("Connected successfully to server");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connect };
