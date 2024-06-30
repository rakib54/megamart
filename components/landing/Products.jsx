import ProductCard from "../product/ProductCard";

export default function Products() {
  return (
    <>
      <div class=" px-6 py-6">
        <h1 class="font-bold text-2xl mb-4">Trending Products</h1>
      </div>

      <section
        id="Projects"
        class="container px-6 mx-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-8  mb-5"
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </>
  );
}
