const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    require: [true, "Please tell your First Name"],
  },
  lastname: {
    type: String,
    require: [true, "Please tell your Last Name"],
  },
  email: {
    type: String,
    require: [true, "email is required"],
    unique: true,
    lowercase: true,
  },
});

module.exports = mongoose.model("User", userSchema);
