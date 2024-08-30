import { auth } from "@/auth";
import { getLatestOrder } from "@/database/queries/order";
import { formattedDateAndTime } from "@/utils/date";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Payment Success | MegaMart",
  description: "MegaMart, Your shopping mall",
};

export default async function PaymentSuccessPage() {
  const session = await auth();
  if (!session) {
    redirect("/login")
  }
  const latestOrder = await getLatestOrder(session?.user?.id);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4 md:p-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <CircleCheckIcon className="h-14 w-14 text-green-500" />
        <h1 className="font-semibold md:text-4xl text-3xl mb-2">Payment successful</h1>
        <p className="max-w-[600px] text-gray-500 md:text-xl/tight dark:text-gray-400">
          Your order has been confirmed and is now being processed. Thank you for shopping with us!
        </p>
      </div>
      <div className="w-full max-w-sm p-0 border border-gray-300">
        <div className="p-4 md:p-6">
          <div className="grid gap-1 text-sm">
            <div className="flex items-center gap-2">
              <div className="font-semibold text-gray-500">Order number:</div>
              <div>#{latestOrder.id}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-semibold text-gray-500">Date:</div>
              <div>{formattedDateAndTime(latestOrder.orderDate)}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-semibold text-gray-500">Amount:</div>
              <div>${latestOrder.subTotal}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-semibold text-gray-500">Payment method:</div>
              <div>Visa Card</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-semibold text-gray-500">Shipping Address:</div>
              <div>{latestOrder.shippingAddress}</div>
            </div>
          </div>
        </div>
        <div className="flex w-full p-4 md:p-6">
          <Link href={"/"} className="ml-auto bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700  transition duration-150">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  )
}

function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}