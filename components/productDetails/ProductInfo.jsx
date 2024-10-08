import { auth } from "@/auth";
import AddToCartAndWishListButton from "./AddToCartAndWishListButton";
import SocialMediaShare from "./SocialMediaShare";

export default async function ProductInfo({ product, isAddedToWishList }) {
  const session = await auth();
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
      <p className="text-gray-600  text-sm mb-4">{product.shortDescription}</p>
      <div className="mb-4">
        <span className="font-bold text-gray-700">Price: </span>
        <span className="text-gray-600 ">
          $
          {(product.price - (product.price * product.discount) / 100).toFixed(
            2
          )}
        </span>
        {product.discount > 0 && (
          <>
            <del className="text-gray-600 text-sm ml-2">${product.price}</del>
            <span className="text-red-500 text-xs ml-3 italic">
              {product.discount}% off
            </span>
          </>
        )}
      </div>
      <div className="mb-4">
        <span className="font-bold text-gray-700 ">Availability: </span>
        {product.stock > 0 ? (
          <span className="text-green-600"> In stock</span>
        ) : (
          <span className="text-red-600"> Out of stock</span>
        )}
      </div>
      <div className="mb-4">
        <span className="font-bold text-gray-700 ">Category: </span>
        <span className="text-gray-600 ">{product.category}</span>
      </div>
      <div className="mb-4">
        <span className="font-bold text-gray-700 ">Stock: </span>
        <span
          className={`${product.stock > 5 ? "text-green-600" : "text-red-600"}`}
        >
          {product.stock}
        </span>
      </div>
      <div className="mb-4">
        <span className="font-bold text-gray-700">Brand: </span>
        <span className="text-gray-600 ">{product.brand}</span>
      </div>

      <AddToCartAndWishListButton
        isAddedToWishList={isAddedToWishList}
        product={product}
        userId={session?.user?.id}
      />
      <SocialMediaShare product={product} />
    </>
  );
}
