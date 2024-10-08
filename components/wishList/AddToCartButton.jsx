"use client";

import { addToCart } from "@/app/actions/cart-action";
import { toast } from "sonner";

export default function AddToCartButton({ userId, product }) {
  const addToCartButtonFromWishList = async () => {
    const productDetails = {
      productId: product._id.toString(),
      quantity: 1,
      name: product.name,
      category: product.category,
      price: product.price,
      discount: product.discount,
      thumbnail: product.thumbnail,
      orderTime: Date.now(),
      expireTime:
        Date.now() +
        parseInt(process.env.NEXT_PUBLIC_EXPIRE_CART_AFTER_MINUTES) * 60 * 1000,
    };
    try {
      await addToCart(userId, productDetails);
      toast.success(`${product.name} is added to cart`);
    } catch (error) {
      toast.error(
        "oops! can not be added more than 5 products or the product is out of stock."
      );
    }
  };

  return (
    <button
      onClick={addToCartButtonFromWishList}
      type="button"
      className="font-medium text-white  px-3 py-2 bg-[#2f3542] hover:bg-[#525b6f] rounded disabled:cursor-not-allowed disabled:bg-gray-400 transition duration-300"
      disabled={product.stock === 0}
      title={
        product.stock === 0
          ? "Product is currently out of stock!"
          : `${product.name}`
      }
    >
      Add to cart
    </button>
  );
}
