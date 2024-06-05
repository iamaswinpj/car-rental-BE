const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    firstName: {
      type: String,
      required: true,
      maxLength: 20,
    },
    lastName: {
      type: String,
      required: true,
      maxLength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minLength: 5,
      maxLength: 30,
    },
    hashPassword: {
      type: String,
      required: true,
      minLength: 5,
    },
  },
  
  { timestamps : true },

  );
  
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;