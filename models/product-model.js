import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    required: false
  },
  price: {
    type: Number,
    required: true
  },
  sku: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  review: {
    type: Number,
    required: true
  },
  arrivalDate: {
    type: String,
    required: true
  },
});

export const productModel = mongoose.models.products ?? mongoose.model("products", productSchema);