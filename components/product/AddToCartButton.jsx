"use client";

import { addToCart } from "@/app/actions";
import { useRouter } from "next/navigation";

export default function AddToCartButton({ product, userId }) {
  const router = useRouter();

  const handleAddToCart = async () => {
    const productDetails = {
      productId: product.id,
      quantity: 1,
      name: product.name,
      category: product.category,
      price: product.price,
      discount: product.discount,
      thumbnail: product.thumbnail,
    };

    if (!userId) {
      router.push("/login");
    }
    try {
      await addToCart(userId, productDetails);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 w-full flex items-center justify-center"
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
