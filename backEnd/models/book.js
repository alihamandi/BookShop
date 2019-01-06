const mongoose = require("mongoose");

const bSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    required: true,
    type: String,
    unique: true
  },
  des: {
    required: true,
    type: String
  },
  cover: {
    required: true,
    type: String
  },
  dlink: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model("Book", bSchema);
