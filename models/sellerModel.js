const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({

    sellerName: {
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

const Seller = mongoose.model("Seller", sellerSchema);

module.exports = Seller;
  