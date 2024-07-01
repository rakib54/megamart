import AddToCartAndWishListButton from "@/components/productDetails/AddToCartAndWishListButton";
import ProductImage from "@/components/productDetails/ProductImage";
import ProductInfo from "@/components/productDetails/ProductInfo";
import SocialMediaShare from "@/components/productDetails/SocialMediaShare";
import { getProductById } from "@/database/product/queries";

export default async function ProductDetails({ params: { id } }) {
  const product = await getProductById(id);

  return (
    <div class="bg-gray-100  py-8">
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
          <div class="md:flex-1 px-4">

            <ProductImage thumbnail={product.thumbnail} />

            <AddToCartAndWishListButton />

            <SocialMediaShare />
          </div>

          <div class="md:flex-1 px-4">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}