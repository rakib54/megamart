"use client";

import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FacebookShareButton, TwitterShareButton } from "react-share";

export default function SocialMediaShare({ product }) {
  return (
    <div className="mt-4">
      <p className="mb-3">Share with friends</p>
      <div className="flex gap-3">
        <span className="text-gray-500 hover:text-gray-600 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer transition duration-150">
          <FacebookShareButton
            title={product.title}
            url={`https://megamart-shopping.vercel.app/product/${product.id}`}
            hashtag={["shopping", "trending"]}
          >
            <FaFacebook className="text-xl" />
          </FacebookShareButton>
        </span>
        <span className="text-gray-500 hover:text-gray-600 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer transition duration-150">
          <TwitterShareButton
            title={product.title}
            url={`https://megamart-shopping.vercel.app/product/${product.id}`}
            hashtag={["shopping", "trending"]}
          >
            <FaXTwitter className="text-xl" />
          </TwitterShareButton>
        </span>
      </div>
    </div>
  );
}
