"use client";

import { addToCart } from "@/app/actions/cart-action";
import { updateWishList } from "@/app/actions/wishlist-action";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { toast } from "sonner";

export default function AddToCartAndWishListButton({
  product,
  userId,
  isAddedToWishList,
}) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");

  const handleAddToCart = async () => {
    const productDetails = {
      productId: product.id,
      quantity,
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

    if (!userId) {
      router.push(`/login?addtocart=${product.id}`);
      return;
    }

    try {
      await addToCart(userId, productDetails);
      toast.success(
        `${productDetails?.name} is added to the cart successfully.`
      );
    } catch (error) {
      toast.error(
        "oops! can not be added more than 5 products or the product is out of stock."
      );
    }
  };

  const handleAddToWishList = async () => {
    if (!userId) {
      router.push(`/login?addtowishlist=${product.id}`);
      return;
    }
    try {
      await updateWishList(userId, product.id);
      if (isAddedToWishList) {
        toast.error(`${product.name} has been removed from wishlist`);
      } else {
        toast.success(`${product.name} is added to the wish list!`);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="mb-4 flex gap-4 items-center">
        <span className="font-bold text-gray-700">Quantity: </span>
        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
          <button
            disabled={quantity === 1}
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            className="h-8 w-8 text-xl flex  justify-center cursor-pointer select-none disabled:text-gray-300 disabled:cursor-not-allowed"
          >
            -
          </button>
          <div className="h-8 w-8 text-base flex items-center justify-center">
            {quantity}
          </div>
          <button
            disabled={product.stock <= 0 || quantity === 5}
            onClick={() => setQuantity((prev) => prev + 1)}
            className="h-8 w-8 text-xl flex  justify-center cursor-pointer select-none disabled:text-gray-300 disabled:cursor-not-allowed"
          >
            +
          </button>
        </div>
      </div>
      {error && <p className="italic text-red-500 text-sm">{error}</p>}
      <div className="flex -mx-2 mb-4 flex-wrap mt-7">
        <div className="w-full sm:w-1/2 px-2 mt-4 sm:mt-0">
          <button
            disabled={product.stock <= 0}
            onClick={handleAddToCart}
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 w-full flex items-center justify-center transition duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
            title={
              product.stock === 0
                ? "Product is currently out of stock!"
                : `${product.name}`
            }
          >
            Add to Cart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
        <div className="w-full sm:w-1/2 px-2 mt-4 sm:mt-0">
          <button
            onClick={handleAddToWishList}
            className={`${
              isAddedToWishList && "bg-red-500 text-white"
            } py-2 px-4 rounded border text-red-500 border-red-500 disabled:opacity-50 w-full flex items-center justify-center transition duration-300 cursor-pointer `}
          >
            {isAddedToWishList ? "Added to wishList" : "Add to wishList"}
            <FaRegHeart className="text-xl ml-2" />
          </button>
        </div>
      </div>
    </>
  );
}
