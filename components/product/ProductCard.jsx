import { auth } from "@/auth";
import { getWishLists } from "@/database/queries/wishlist";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import AddToCartButton from "./AddToCartButton";
import AddToWishListButton from "./AddToWishListButton";

export default async function ProductCard({ product }) {
  const session = await auth();

  const userId = session?.user?.id;
  const wishLists = await getWishLists(userId);

  const isAddedToWishList = wishLists?.productId.find(
    (item) => item._id.toString() === product.id
  );

  return (
    <div className="h-fit w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <Link href={`/product/${product.id}`}>
        <Image
          src={product?.thumbnail}
          height={224}
          width={288}
          alt="Product"
          className="h-56 w-72 object-cover rounded-t-xl"
        />
      </Link>
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
          {product.discount > 0 && (
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">
                ${product.price}
              </p>
            </del>
          )}
          <AddToWishListButton
            product={product}
            userId={userId}
            isAddedToWishList={!!isAddedToWishList}
          />
        </div>
        <div className="flex gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>

      <AddToCartButton product={product} userId={userId} />
    </div>
  );
}
