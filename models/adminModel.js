const mongoose = require ("mongoose");

const adminSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true,
        unique: true,
        minLength: 3,
    },
    hashPassword:{
      type: String,
      required: true,
    },
    
   seller: [{ type: mongoose.Types.ObjectId , ref: "Seller" }],
   car: [{ type: mongoose.Types.ObjectId , ref: "Car" }],

},
    {timestamps: true},
);

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;