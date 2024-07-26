import mongoose, { Schema } from "mongoose";

const wishListSchema = new Schema({
  userId: {
    required: true,
    type: String
  },
  productId: [{ type: Schema.ObjectId, ref: "productModel" }]
})

export const wishListModel = mongoose.models.wishlists ?? mongoose.model('wishlists', wishListSchema);