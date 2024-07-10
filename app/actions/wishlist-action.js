"use server"

import { addToWishList } from "@/database/queries/wishlist";
import { revalidatePath } from "next/cache";

export const updateWishList = async (userId, productId) => {

  try {
    await addToWishList(userId, productId);

    revalidatePath("/");
  } catch (error) {
    throw new Error(error.message);
  }
}