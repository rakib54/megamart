import { getProducts } from "@/database/queries/product";
import ProductCard from "../product/ProductCard";

export default async function Products() {
  const products = await getProducts();

  return (
    <div className="container mx-auto p-6">
      <div className="mt-10 mb-10">
        <h1 className="font-semibold text-2xl mb-4 text-[#2f3542]">
          Trending Products
        </h1>
      </div>

      <section
        id="Projects"
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-8 mb-5"
      >
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
