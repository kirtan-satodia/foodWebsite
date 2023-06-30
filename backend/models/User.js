const mongoose = require("mongoose");
// const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", UserSchema);

//A Mongoose model is a wrapper on the Mongoose schema.
//A Mongoose schema defines the structure of the document, default values, validators, etc...
// whereas a Mongoose Model provides an interface to the database for CRUD operations.
