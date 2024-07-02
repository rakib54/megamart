import Image from "next/image";
import Link from "next/link";
import { FaRegHeart, FaStar } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div className="h-fit w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <Image
        src={product?.thumbnail}
        height={224}
        width={288}
        alt="Product"
        className="h-56 w-72 object-cover rounded-t-xl"
      />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">
          {product.brand}
        </span>
        <Link
          href={`/product/${product.id}`}
          className="text-lg font-bold text-black truncate block capitalize"
        >
          {product.name}
        </Link>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">
            $
            {(product.price - (product.price * product.discount) / 100).toFixed(
              2
            )}
          </p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">
              ${product.price}
            </p>
          </del>
          <div className="ml-auto">
            <FaRegHeart className="text-xl" />
          </div>
        </div>
        <div className="flex gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
      <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 w-full flex items-center justify-center">
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
            stroke-linejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </button>
    </div>
  );
}
