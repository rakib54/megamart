"use server"

import { getLatestProducts, getProductById } from "@/database/queries/product";
import { dbConnect } from "@/service/mongo";
import { revalidatePath } from "next/cache";

export const getSingleProduct = async (productId) => {
  await dbConnect();

  try {
    const product = await getProductById(productId);

    return product;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const getMoreLatestProducts = async (productNumber) => {
  await dbConnect();

  try {
    const products = await getLatestProducts(productNumber);

    return products;

    revalidatePath("/");
  } catch (error) {
    throw new Error(error.message);
  }
}