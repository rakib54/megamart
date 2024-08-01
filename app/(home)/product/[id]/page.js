import { auth } from "@/auth";
import NotFound from "@/components/product/NotFound";
import ProductCard from "@/components/product/ProductCard";
import ProductDescription from "@/components/productDetails/ProductDescription";
import ProductImage from "@/components/productDetails/ProductImage";
import ProductInfo from "@/components/productDetails/ProductInfo";
import { getProductById, getRelatedProduct } from "@/database/queries/product";
import { getWishLists } from "@/database/queries/wishlist";

export default async function ProductDetails({ params: { id } }) {
  const product = await getProductById(id);
  const session = await auth();
  const wishLists = await getWishLists(session?.user?.id);
  const isAddedToWishList = wishLists?.productId.find((item) => item._id.toString() === id);

  const relatedProduct = await getRelatedProduct(id);


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
      <div className="p-10 mt-20">
        <h1 className="text-2xl font-bold">Related Product</h1>
        <section
          id="Projects"
          className="container mt-10 px-6 mx-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-8  mb-5"
        >
          {
            relatedProduct.length > 0 ?
              relatedProduct.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
              :
              <p className="text-xl text-red-500">No Results Found!</p>
          }
        </section>
      </div>
    </div>
  )
}