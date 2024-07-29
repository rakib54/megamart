import { auth } from "@/auth";
import NotFound from "@/components/product/NotFound";
import ProductDescription from "@/components/productDetails/ProductDescription";
import ProductImage from "@/components/productDetails/ProductImage";
import ProductInfo from "@/components/productDetails/ProductInfo";
import { getProductById } from "@/database/queries/product";
import { getWishLists } from "@/database/queries/wishlist";

export default async function ProductDetails({ params: { id } }) {
  const product = await getProductById(id);
  const session = await auth();
  const wishLists = await getWishLists(session?.user?.id);
  const isAddedToWishList = wishLists?.productId.find((item) => item._id.toString() === id);


  if (!product) {
    return <NotFound />
  }

  return (
    <div className="bg-gray-100  py-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">

            <ProductImage thumbnail={product.thumbnail} />

            <ProductDescription description={product.description} />

          </div>

          <div className="md:flex-1 px-4">
            <ProductInfo isAddedToWishList={!!isAddedToWishList} product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}