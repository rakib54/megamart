import mongoose, { Schema } from "mongoose";

const wishListSchema = new Schema({
  userId: {
    required: true,
    type: String
  },
  productId: {
    required: true,
    type: Array
  }
})

export const wishListModel = mongoose.models.wishlists ?? mongoose.model('wishlists', wishListSchema);