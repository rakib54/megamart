'use server'

import { addedToCartProduct, decrementProductQuantityFromCart, deleteCart, deleteCartAfterOrder, deleteExpireCart, incrementProductQuantityFromCart } from "@/database/queries/cart";
import { dbConnect } from "@/service/mongo";
import { revalidatePath } from "next/cache";

export const removeCart = async (userId, productId, quantity) => {
  await dbConnect();
  try {
    await deleteCart(userId, productId, quantity);

    revalidatePath("/cart");
  } catch (error) {
    throw new Error("Something went wrong!");
  }
}

export const addToCart = async (userId, productDetails) => {
  await dbConnect();
  try {
    await addedToCartProduct(userId, productDetails);

    revalidatePath("/");

  } catch (error) {
    throw new Error(error.message);
  }
}

export const decrementProductQuantity = async (userId, productId) => {
  await dbConnect();
  try {
    await decrementProductQuantityFromCart(userId, productId);

    revalidatePath("/cart");
  } catch (error) {
    throw new Error(error.message);
  }
}

export const incrementProduct = async (userId, productId) => {
  await dbConnect();
  try {
    await incrementProductQuantityFromCart(userId, productId);

    revalidatePath("/cart");
  } catch (error) {
    throw new Error(error.message);
  }
}

export const deleteCartAfterOrderComplete = async (userId) => {
  await dbConnect();
  try {
    await deleteCartAfterOrder(userId);

    revalidatePath("/cart");

  } catch (error) {
    throw new Error(error.message);
  }
}

export const deleteExpireCartAndProductBackToInventory = async () => {
  await dbConnect();
  await deleteExpireCart();
  revalidatePath("/");
  revalidatePath("/cart");
}