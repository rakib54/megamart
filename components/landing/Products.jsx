import { getProducts } from "@/database/product/queries";
import ProductCard from "../product/ProductCard";

export default async function Products() {
  const products = await getProducts();

  return (
    <>
      <div className=" px-6 py-6">
        <h1 className="font-bold text-2xl mb-4">Trending Products</h1>
      </div>

      <section
        id="Projects"
        className="container px-6 mx-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-8  mb-5"
      >
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}
