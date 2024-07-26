import { auth } from "@/auth";
import { getWishLists } from "@/database/queries/wishlist";
import Image from "next/image";

export default async function WishlistPage() {
  const session = await auth();
  const items = await getWishLists(session?.user?.id);
  console.log(items);


  return (
    <div className="container p-10 h-screen">
      <h1 className="text-2xl text-gray-600 ">Your Favorite Items</h1>
      {items?.productId.length > 0 ? <p className="text-base mt-2 font-bold text-gray-500">There are <span className="text-green-500">{items.productId.length}</span> products in your list</p> : <p className="text-base mt-2 font-bold text-gray-500">No Products added Yet!</p>}
      <div className="relative overflow-x-auto">
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
                    <div className="text-base font-semibold">{item.name}</div>
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

                  <button type="button" className="font-medium text-white  px-3 py-2 bg-blue-600 rounded">Add to cart</button>
                </td>
                <td className="px-6 py-4">

                  <button
                    className="rounded-full group flex items-center justify-center focus-within:outline-red-500 max-[550px]:text-center"
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                        cx="17"
                        cy="17"
                        r="17"
                        fill=""
                      />
                      <path
                        className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                        d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                        stroke="#EF4444"
                        stroke-width="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}