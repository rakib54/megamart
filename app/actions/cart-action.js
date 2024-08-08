'use server'

import { addedToCartProduct, decrementProductQuantityFromCart, deleteCart, deleteCartAfterOrder, incrementProductQuantityFromCart } from "@/database/queries/cart";
import { revalidatePath } from "next/cache";

export const removeCart = async (userId, productId, quantity) => {

  try {
    await deleteCart(userId, productId, quantity);

    revalidatePath("/cart");
  } catch (error) {
    throw new Error("Something went wrong!");
  }
}

export const addToCart = async (userId, productDetails) => {
  try {
    await addedToCartProduct(userId, productDetails);

    revalidatePath("/");

  } catch (error) {
    throw new Error(error.message);
  }
}

export const decrementProductQuantity = async (userId, productId) => {
  try {
    await decrementProductQuantityFromCart(userId, productId);

    revalidatePath("/cart");
  } catch (error) {
    throw new Error(error.message);
  }
}

export const incrementProduct = async (userId, productId) => {
  try {
    await incrementProductQuantityFromCart(userId, productId);

    revalidatePath("/cart");
  } catch (error) {
    throw new Error(error.message);
  }
}

export const deleteCartAfterOrderComplete = async (userId) => {
  try {
    await deleteCartAfterOrder(userId);

    revalidatePath("/cart");

  } catch (error) {
    throw new Error(error.message);
  }
}