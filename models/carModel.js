const mongoose = require ("mongoose");

const carSchema = new mongoose.Schema({

    carName:{
        type: String,
        required: true,
        minLength: 4,
    },
    category:{
      type: String,
      enum: ["Normal car","Wedding car" ,"Offroad" ],
      maxLength: 20,
      required: true,
    },
    description:{
        type: String,
        required: true,
        minLength:10,
        maxLength:50
    },
    price:{
        type: String,
        required: true,
    },
    image:{
        type: String,
    },
   seller: [{ type: mongoose.Types.ObjectId , ref: "Seller" }],
},
    {timestamps: true},
);

const Car = mongoose.model("Car",carSchema)
module.exports = Car;
