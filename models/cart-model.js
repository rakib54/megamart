import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  productId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  orderTime: {
    type: Date,
    default: Date.now()
  },
  expireTime: {
    type: Date,
    default: Date.now() + 30 * 60 * 1000 // 30 minutes from creation time
  }
});

export const cartModel = mongoose.models.carts ?? mongoose.model("carts", cartSchema);