import Categories from "@/components/landing/Categories";
import Discount from "@/components/landing/Discount";
import Hero from "@/components/landing/Hero";
import LatestProducts from "@/components/landing/LatestProducts";
import Products from "@/components/landing/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Categories />
      <Discount />
      <LatestProducts />
    </>
  );
}
