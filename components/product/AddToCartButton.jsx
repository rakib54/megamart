"use client";

import { addToCart } from "@/app/actions/cart-action";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function AddToCartButton({ product, userId }) {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleAddToCart = async () => {
    const productDetails = {
      productId: product.id,
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

    if (!userId) {
      router.push(`/login?addtocart=${product?.id}`);
      return;
    }
    try {
      console.log("addtocart working!!");
      await addToCart(userId, productDetails);
      toast.success(
        `${productDetails?.name} is added to the cart successfully.`
      );
    } catch (error) {
      console.log("error in button", error);
      toast.error(error.message);
    }
  };

  return (
    <button
      disabled={product.stock <= 0}
      onClick={handleAddToCart}
      className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 w-full flex items-center justify-center"
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
  );
}
