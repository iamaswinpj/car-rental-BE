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
      role: {
        type: String,
        enum: ["seller", "admin"],
      },
      hashPassword: {
        type: String,
        required: true,
        minLength: 5,
      },
      car: [{ type: mongoose.Types.ObjectId, ref: "Car" }],
    },
    
    { timestamps : true },
    
);

const Seller = mongoose.model("Seller", sellerSchema);

module.exports = Seller;
  