"use client";

import { updateWishList } from "@/app/actions/wishlist-action";
import { useRouter } from "next/navigation";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { toast } from "sonner";

export default function AddToWishListButton({
  product,
  userId,
  isAddedToWishList,
}) {
  const router = useRouter();

  const handleAddToWishList = async () => {
    if (!userId) {
      router.push(`/login?addtowishlist=${product?.id}`);
      return;
    }
    try {
      await updateWishList(userId, product?.id);
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
    <button
      onClick={handleAddToWishList}
      className="ml-auto"
      title="Add to wishList"
    >
      {!isAddedToWishList ? (
        <FaRegHeart className="text-2xl cursor-pointer text-red-500" />
      ) : (
        <FaHeart className="text-2xl cursor-pointer text-red-500" />
      )}
    </button>
  );
}
