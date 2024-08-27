import { auth } from "@/auth";
import AddToCartButton from "@/components/wishList/AddToCartButton";
import DeleteWishListProductButton from "@/components/wishList/DeleteWishListProductButton";
import { getWishLists } from "@/database/queries/wishlist";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "WishList | MegaMart",
  description: "MegaMart, Your shopping mall",
};

export default async function WishlistPage() {
  const session = await auth();
  const items = await getWishLists(session?.user?.id);


  return (
    <div className="container p-10 h-screen">
      <h1 className="text-2xl text-gray-600 ">Your Favorite Items</h1>
      {items?.productId.length > 0 ? <p className="text-base mt-2 font-bold text-gray-500">There are <span className="text-green-500">{items.productId.length}</span> products in your list</p> : <p className="text-base mt-2 font-bold text-gray-500">No Products added Yet!</p>}
      {items?.productId.length > 0 && <div className="relative overflow-x-auto">
        <table className="w-full mt-10 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Stock Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            {items.productId.map((item) => (
              <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  <Image className="h-10 w-10 rounded" src={item.thumbnail} alt={item.name} width={40} height={40} />
                  <div className="ps-3">
                    <Link href={`/product/${item._id.toString()}`} className="text-base font-semibold">{item.name}</Link>
                    <div className="font-normal text-gray-500">{item.category}</div>
                  </div>
                </th>
                <td className="px-6 py-4 font-semibold">
                  <span className="line-through mr-2">${item.price}</span>
                  ${(item.price - (item.price * item.discount) / 100).toFixed(
                    2
                  )}
                </td>
                <td className="px-6 py-4">
                  {item.stock > 0 ?
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                      In Stock
                    </div> : <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
                      Out of Stock
                    </div>}
                </td>
                <td className="px-6 py-4">
                  <AddToCartButton userId={session?.user?.id} product={item} />
                </td>
                <td className="px-6 py-4">

                  <DeleteWishListProductButton userId={session?.user?.id} productId={item._id.toString()} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>}

    </div>
  )
}