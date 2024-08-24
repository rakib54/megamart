"use client";

import {
  decrementProductQuantity,
  incrementProduct,
  removeCart,
} from "@/app/actions/cart-action";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export default function CartCard({ item, userId }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [error, setError] = useState("");

  const handleDeleteCart = async () => {
    try {
      await removeCart(userId, item.productId, item.quantity);
      toast.success(`${item.name} is removed successfully from cart.`);
    } catch (error) {
      toast.error("Something went wrong when removing the item!");
    }
  };

  const IncrementProductQuantity = async () => {
    setQuantity((prev) => prev + 1);
    setError("");
    try {
      await incrementProduct(userId, item.productId);
    } catch (error) {
      setQuantity((prev) => prev - 1);
      toast.error(`Oops! ${item.name} is currently out of stock!`);
      setError(error.message);
    }
  };

  const DecrementProductQuantity = async () => {
    setQuantity((prev) => Math.max(1, prev - 1));
    setError("");
    try {
      await decrementProductQuantity(userId, item.productId);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
      <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
        <div>
          <Image
            src={item.thumbnail}
            alt={item.name}
            className="w-[120px]"
            width={120}
            height={80}
          />
        </div>
        <div className="pro-data w-full max-w-sm ">
          <Link
            href={`product/${item.productId}`}
            className="font-semibold text-xl leading-8 text-black max-[550px]:text-center"
          >
            {item.name}
          </Link>
          <p className="font-normal text-lg  text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
            {item.category}
          </p>
          <h6 className="font-medium text-lg leading-8 text-gray-500  max-[550px]:text-center">
            <span className="line-through">${item.price}</span>
            <span className="ml-2">
              ${(item.price - (item.price * item.discount) / 100).toFixed(2)}
            </span>
          </h6>

          {/* delete button */}

          <button
            onClick={handleDeleteCart}
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
        </div>
      </div>

      <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-16">
        <div className="flex items-center w-full mx-auto justify-center">
          <button
            disabled={quantity === 1}
            onClick={DecrementProductQuantity}
            className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50 disabled:text-gray-100 disabled:cursor-not-allowed"
          >
            <svg
              className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M16.5 11H5.5"
                stroke=""
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M16.5 11H5.5"
                stroke=""
                stroke-opacity="0.2"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M16.5 11H5.5"
                stroke=""
                stroke-opacity="0.2"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <p className="border-y border-gray-200 text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent">
            {quantity}
          </p>
          <button
            disabled={error || quantity === 5}
            onClick={IncrementProductQuantity}
            className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50 disabled:text-gray-100 disabled:cursor-not-allowed"
          >
            <svg
              className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M11 5.5V16.5M16.5 11H5.5"
                stroke=""
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M11 5.5V16.5M16.5 11H5.5"
                stroke=""
                stroke-opacity="0.2"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M11 5.5V16.5M16.5 11H5.5"
                stroke=""
                stroke-opacity="0.2"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <h6 className="text-[#e14941] font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
          $
          {(
            (item.price - (item.price * item.discount) / 100) *
            item.quantity
          ).toFixed(2)}
        </h6>
      </div>
    </div>
  );
}
