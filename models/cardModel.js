const mongoose = require("mongoose");
const { Schema } = mongoose;

const CardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cardId: {
    type: String,
    required: true,
  },
  msg: String
});

const cardModel = mongoose.model("info", CardSchema);
module.exports = cardModel;