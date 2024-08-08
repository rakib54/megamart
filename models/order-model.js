import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  subTotal: {
    type: String,
    required: true
  },
  orderDetails: {
    type: Array,
    required: true
  },
  orderDate: {
    type: Date,
    default: Date.now(),
  },
  shippingAddress: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  houseNo: {
    type: String,
    required: true
  },
  division: {
    type: String,
    required: true
  }
});

export const orderModel = mongoose.models.orders ?? mongoose.model("orders", orderSchema);