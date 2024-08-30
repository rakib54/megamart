import { getProductCategory } from "@/database/queries/product";
import Image from "next/image";
import Link from "next/link";

export default async function Categories() {
  const categories = await getProductCategory();
  return (
    <div className="container mx-auto p-6">
      <div className="mt-10 mb-10">
        <h1 className="font-semibold text-2xl text-[#2f3542]">
          Top Categories
        </h1>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-6 lg:grid-cols-4 mx-auto md:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-2 justify-items-center justify-center">
        {categories?.map((category) => (
          <Link
            key={category.name}
            href={`/shop?category=${category.name}`}
            className="bg-white p-5 border shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-lg"
          >
            <Image
              src={category.thumbnail}
              alt="Product"
              className="h-32 w-36 object-cover"
              width={120}
              height={120}
            />
            <p className="text-center mt-2">{category.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
