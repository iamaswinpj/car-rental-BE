const mongoose = require ("mongoose");

const carSchema = new mongoose.Schema({

    carName:{
        type: String,
        required: true,
        minLength: 4,
    },
    category:{
      type: String,
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
        type: Number,
        required: true,
    },
    image:{
        type: String,
    }
},
    {timestamps: true},
);

const Car = mongoose.model("Car",carSchema)
module.exports = Car;
