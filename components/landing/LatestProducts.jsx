import { getLatestProducts } from "@/database/queries/product";
import ProductCard from "../product/ProductCard";

export default async function LatestProducts() {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <div className=" px-6 py-6">
        <h1 className="font-bold text-2xl mb-4">Latest Products</h1>
      </div>

      <section
        id="Projects"
        className="container px-6 mx-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-8  mb-5"
      >
        {latestProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
      <div className="text-center mt-10">
        <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 ">
          Load More
        </button>
      </div>
    </>
  );
}
