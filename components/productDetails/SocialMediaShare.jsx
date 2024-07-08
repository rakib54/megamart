import { FaFacebook, FaXTwitter } from "react-icons/fa6";

export default function SocialMediaShare() {
  return (
    <div className="mt-4">
      <p className="mb-3">Share with friends</p>
      <div className="flex gap-3">
        <span className="text-gray-500 hover:text-gray-600 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer transition duration-150">
          <FaFacebook className="text-xl" />
        </span>
        <span className="text-gray-500 hover:text-gray-600 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer transition duration-150">
          <FaXTwitter className="text-xl" />
        </span>
      </div>
    </div>
  );
}
