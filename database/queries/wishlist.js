import { productModel } from "@/models/product-model";
import { wishListModel } from "@/models/wishList-model";
import { dbConnect } from "@/service/mongo";
import { replaceMongoIdWithObject } from "@/utils/db-utils";
import { getProductById } from "./product";

export const addToWishList = async (userId, pId) => {

  await dbConnect();
  if (!userId) {
    return null;
  }

  const userWishlists = await wishListModel.findOne({ userId: userId });
  const product = await getProductById(pId);

  // if product id is invalid
  if (!product) {
    throw new Error(`Cannot find product!`);
  }

  if (userWishlists) {
    const isAlreadyAdded = userWishlists.productId.includes(pId);

    if (isAlreadyAdded) {
      await userWishlists.productId.pull(pId);
      await userWishlists.save();
      return new Error("product has been removed from wishlist");

    } else {
      userWishlists.productId.push(pId);

      await userWishlists.save();
    }

  } else {
    await wishListModel.create({ userId, productId: pId });
  }
}

export const getWishLists = async (userId) => {
  await dbConnect();
  if (!userId) return null;
  const wishlist = await wishListModel.findOne({ userId: userId })
    .populate({
      path: "productId",
      model: productModel,
    })
    .lean();


  return replaceMongoIdWithObject(wishlist);
}

export const deleteFromWishList = async (userId, pId) => {
  await dbConnect();

  if (!userId) return null;

  try {
    const userWishlist = await wishListModel.findOne({ userId });

    if (userWishlist) {
      await userWishlist.productId.pull(pId);
      await userWishlist.save();
      return new Error("product has been removed from wishlist");
    }
  } catch (error) {
    throw new Error("Something went Wrong!");
  }
}