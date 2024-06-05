const mongoose = require("mongoose");

const paymentModel = new mongoose.Schema(
    {

        method: {
            type: String,
            required: true,
           enum:["cash","crediCard"]
        },
        proof: {
            type: String,
            required: true,
        },
        cardNum: {
            type: Number,
            required: true,
            maxLength: 50,
            minLength:8
        }
       
      },
      { timestamps: true }
    );
const Payment = mongoose.model("Payment",paymentModel);

module.exports = Payment;