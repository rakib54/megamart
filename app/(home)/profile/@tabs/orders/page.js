import { auth } from "@/auth";
import { getOrdersDetailsForUser } from "@/database/queries/order";
import { formatDateInBd, updateOrderStatus } from "@/utils/date";
import Image from "next/image";

export const metadata = {
  title: "Orders | MegaMart",
  description: "MegaMart, Your shopping mall",
};

export default async function OrderPage() {
  const session = await auth();

  const allOrders = await getOrdersDetailsForUser(session?.user?.id);

  return (
    <div>
      <div>

        {allOrders?.length > 0 ? <div className="relative overflow-x-auto">
          <h3 className="text-gray-600 font-bold">Recent Orders</h3>
          <table className="w-full mt-10 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Order Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Placed On
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {allOrders?.map((order) => (
                <tr key={order.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4 font-semibold">
                    {order?.id}
                  </td>
                  <td scope="row" className="flex items-center px-6 py-4 text-gray-900 dark:text-white font-semibold flex-wrap">
                    {order.orderDetails.map((item) => (
                      <div key={item.id} className="flex">
                        <Image className="h-10 w-10 rounded" src={item.thumbnail} alt={item.name} width={40} height={40} />
                        <div className="ps-3">
                          <p className="text-base font-semibold">{item.name}</p>
                          <div className="font-normal text-gray-500">{item.category}</div>
                        </div>
                      </div>
                    ))}
                  </td>

                  <td className="px-6 py-4 font-semibold">
                    {formatDateInBd(order.orderDate)}
                  </td>
                  <td className="px-6 py-4 font-semibold">
                    ${order.subTotal}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {updateOrderStatus(order.orderDate) == "Pending" ? <span className="text-red-500">Pending</span> : <span className="text-green-500">Delivered</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> : <p className="font-bold text-gray-600">You don&apos;t have any order.</p>}
      </div>
    </div>
  )
}