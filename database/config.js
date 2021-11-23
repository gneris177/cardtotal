require("dotenv").config();
const mongoose = require("mongoose");
const uri = process.env.uri;

exports.conn = () => {
  mongoose
    .connect(uri)
    .then(() => console.log("db conn"))
    .catch((e) => console.log(`erro ${e}`));
};