"use server"

import { addToWishList, deleteFromWishList } from "@/database/queries/wishlist";
import { revalidatePath } from "next/cache";

export const updateWishList = async (userId, productId) => {

  try {
    await addToWishList(userId, productId);

    revalidatePath("/");
  } catch (error) {
    throw new Error(error.message);
  }
}

export const deleteWishListProduct = async (userId, productId) => {
  try {
    await deleteFromWishList(userId, productId);
    revalidatePath("/wishlist");
  } catch (error) {
    throw new Error(error.message);
  }
}