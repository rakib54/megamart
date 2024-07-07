import AddToCartAndWishListButton from "@/components/productDetails/AddToCartAndWishListButton";
import ProductImage from "@/components/productDetails/ProductImage";
import ProductInfo from "@/components/productDetails/ProductInfo";
import SocialMediaShare from "@/components/productDetails/SocialMediaShare";
import { getProductById } from "@/database/queries/product";

export default async function ProductDetails({ params: { id } }) {
  const product = await getProductById(id);

  return (
    <div className="bg-gray-100  py-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">

            <ProductImage thumbnail={product.thumbnail} />

            <AddToCartAndWishListButton />

            <SocialMediaShare />
          </div>

          <div className="md:flex-1 px-4">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}