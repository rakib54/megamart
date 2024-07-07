import { cartModel } from "@/models/cart-model";
import { productModel } from "@/models/product-model";
import { dbConnect } from "@/service/mongo";
import { replaceMongoIdWithArray } from "@/utils/db-utils";

export const getCartsForUser = async (userId) => {
  await dbConnect();
  const carts = await cartModel.find({ userId }).lean();

  return replaceMongoIdWithArray(carts);
}

export const addedToCartProduct = async (userId, productDetails) => {
  await dbConnect();

  try {
    const product = await productModel.findOne({ _id: productDetails.productId });

    if (product.stock < productDetails.quantity) {
      throw new Error(`${product.name} is out of stock`);
    } else {
      // update the stock of products
      await productModel.updateOne(
        { _id: product._id },
        { $inc: { stock: - productDetails.quantity } }
      )
    }

    const alreadyExistsInCart = await cartModel.findOne({ productId: productDetails.productId, userId: userId });

    if (alreadyExistsInCart) {
      await cartModel.updateOne(
        { productId: productDetails.productId },
        { $inc: { quantity: productDetails.quantity } }
      )
    } else {
      const newProduct = {
        userId,
        ...productDetails
      }

      await cartModel.create(newProduct);
    }

  } catch (error) {
    throw new Error("Something went wrong while adding product!");
  }
}