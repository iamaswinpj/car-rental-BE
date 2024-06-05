const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
    {
        customerId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        carId: {
            type: Schema.Types.ObjectId,
            ref: 'Car',
            required: true
        },
        pickupDate: {
            type: Date,
            required: true
        },
        dropOffDate: {
            type: Date,
            required: true
        },
        totalPrice: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            enum: ['pending', 'confirmed', 'canceled', 'completed'],
            default: 'pending',
            required: true
        }
    }, {
        timestamps: true
    });

const Order = mongoose.model("Order",orderSchema);

module.exports = Order;