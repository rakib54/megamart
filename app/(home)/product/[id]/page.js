import AddToCartAndWishListButton from "@/components/productDetails/AddToCartAndWishListButton";
import ProductImage from "@/components/productDetails/ProductImage";
import ProductInfo from "@/components/productDetails/ProductInfo";
import SocialMediaShare from "@/components/productDetails/SocialMediaShare";

export default function ProductDetails({ params: { id } }) {
  return (
    <div class="bg-gray-100  py-8">
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
          <div class="md:flex-1 px-4">

            <ProductImage />

            <AddToCartAndWishListButton />

            <SocialMediaShare />
          </div>

          <div class="md:flex-1 px-4">
            <ProductInfo />
          </div>
        </div>
      </div>
    </div>
  )
}