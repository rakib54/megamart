import { cartModel } from "@/models/cart-model";
import { productModel } from "@/models/product-model";
import { dbConnect } from "@/service/mongo";
import { replaceMongoIdWithArray } from "@/utils/db-utils";

export const getCartsForUser = async (userId) => {
  await dbConnect();
  if (!userId) return null;
  const carts = await cartModel.find({ userId }).lean();

  return replaceMongoIdWithArray(carts);
}

export const addedToCartProduct = async (userId, productDetails) => {
  await dbConnect();
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

  if (alreadyExistsInCart && alreadyExistsInCart.quantity + productDetails.quantity > 5) {
    throw new Error(`You can not add product more than 5. please check your cart`);
  }

  try {

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

export const deleteCart = async (userId, productId, quantity) => {
  await dbConnect();
  try {
    const response = await cartModel.deleteOne(
      { userId: userId, productId: productId },
    );

    await productModel.updateOne(
      { _id: productId },
      { $inc: { stock: quantity } }
    )
  } catch (error) {
    throw new Error("Something went wrong while deleting this cart!");
  }
}

export const incrementProductQuantityFromCart = async (userId, productId) => {
  await dbConnect();

  const product = await productModel.findOne({ _id: productId });

  if (product?.stock <= 0) {
    throw new Error("You can not add more than this! stock limited");
  }

  await productModel.updateOne(
    { _id: productId },
    { $inc: { stock: -1 } }
  )

  try {
    await cartModel.updateOne(
      { userId: userId, productId: productId },
      { $inc: { quantity: 1 } }
    )
  } catch (error) {
    throw new Error(error.message)
  }
}

export const decrementProductQuantityFromCart = async (userId, productId) => {
  await dbConnect();

  try {
    await productModel.updateOne(
      { _id: productId },
      { $inc: { stock: 1 } }

    )
    await cartModel.updateOne(
      { userId: userId, productId: productId },
      { $inc: { quantity: -1 } }
    )
  } catch (error) {
    throw new Error(error.message)
  }
}