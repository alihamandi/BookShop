const mongoose = require("mongoose");

var validation = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const uSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  age: {
    required: [true, "Age Is Required"],
    type: Number
  },
  name: {
    type: String
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email is required",
    validate: [validation, "not valid"],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "not valid"]
  },
  password: {
    required: true,
    type: String
  },
  kind: {
    type: String,
    required: true,
    enum: ["user"]
  }
});

module.exports = mongoose.model("User", uSchema);
