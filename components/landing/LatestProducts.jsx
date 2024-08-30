import { getLatestProducts } from "@/database/queries/product";
import ProductCard from "../product/ProductCard";

export default async function LatestProducts() {
  const latestProducts = await getLatestProducts();

  return (
    <div className="container mx-auto p-6">
      <div className="mt-10 mb-10">
        <h1 className="font-semibold text-2xl mb-4 text-[#2f3542]">
          Latest Products
        </h1>
      </div>

      <section
        id="Projects"
        className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-8  mb-5"
      >
        {latestProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
      <div className="text-center mt-10">
        <button className="py-2 px-4 bg-[#2f3542] text-white rounded hover:bg-[#525b6f] disabled:opacity-50 ">
          Load More
        </button>
      </div>
    </div>
  );
}
