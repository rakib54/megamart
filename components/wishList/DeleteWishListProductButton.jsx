"use client";

import { deleteWishListProduct } from "@/app/actions/wishlist-action";
import { toast } from "sonner";

export default function DeleteWishListProductButton({ userId, productId }) {
  const deleteProductFromWishList = async () => {
    try {
      await deleteWishListProduct(userId, productId);
      toast.success("Product deleted successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <button
      onClick={deleteProductFromWishList}
      className="rounded-full group flex items-center justify-center focus-within:outline-red-500 max-[550px]:text-center"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
          cx="17"
          cy="17"
          r="17"
          fill=""
        />
        <path
          className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
          d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
          stroke="#EF4444"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
