"use server"

import { getProductById } from "@/database/queries/product";
import { dbConnect } from "@/service/mongo";

export const getSingleProduct = async (productId) => {
  await dbConnect();

  try {
    const product = await getProductById(productId);

    return product;
  } catch (error) {
    throw new Error(error.message);
  }
}