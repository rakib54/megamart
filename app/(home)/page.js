import Categories from "@/components/landing/Categories";
import Discount from "@/components/landing/Discount";
import Header from "@/components/landing/Header";
import LatestProducts from "@/components/landing/LatestProducts";
import Products from "@/components/landing/Products";

export default function Home() {
  return (
    <>
      <Header />
      <Products />
      <Categories />
      <Discount />
      <LatestProducts />
    </>
  );
}
