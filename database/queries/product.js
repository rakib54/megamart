import { productModel } from "@/models/product-model";
import { dbConnect } from "@/service/mongo";
import { replaceMongoIdWithArray, replaceMongoIdWithObject } from "@/utils/db-utils";

export const getProducts = async () => {
  await dbConnect();
  try {
    const products = await productModel.find().lean();

    return replaceMongoIdWithArray(products);
  } catch (error) {
    throw new Error(error.message);
  }
}

export const getLatestProducts = async () => {
  await dbConnect();
  try {
    const products = await productModel.find().lean();

    const newProducts = products.sort((a, b) => {
      return new Date(b.arrivalDate) - new Date(a.arrivalDate); // descending order by date
    }).slice(0, 4);

    return replaceMongoIdWithArray(newProducts);
  } catch (error) {
    throw new Error(error.message);
  }
}

export const getProductById = async (id) => {
  await dbConnect();

  try {
    const product = await productModel.findById(id).lean();

    if (!product) {
      return null;
    }

    return replaceMongoIdWithObject(product);

  } catch (error) {
    return null;
  }
}