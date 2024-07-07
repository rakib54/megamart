import { auth } from "@/auth";
import CartCard from "@/components/cart/cartCard";
import { getCartsForUser } from "@/database/queries/cart";
import Link from "next/link";

export default async function Cart() {
  const session = await auth();

  const cartList = await getCartsForUser(session?.user?.id);

  const subTotal = cartList.reduce((curr, item) => {
    return curr + (item.price * item.quantity)
  }, 0);

  return (
    <section className="py-16">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">

        <h2 className=" font-bold text-3xl leading-10 mb-8 text-left text-black">Your Cart
        </h2>
        <div className="hidden lg:grid grid-cols-2 py-6">
          <div className="font-normal text-xl leading-8 text-gray-500">Product</div>
          <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
            <span className="w-full max-w-[260px] text-center ml-10">Quantity</span>
            <span className="w-full max-w-[200px] text-center">Total</span>
          </p>
        </div>

        {
          cartList?.map((item) => (
            <CartCard key={item.id} item={item} />
          ))
        }

        <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">

          <div className="flex items-center justify-between w-full py-6">
            <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Sub Total</p>
            <h6 className="font-manrope font-medium text-2xl leading-9 text-[#c14c46]">${subTotal}</h6>
          </div>
        </div>
        <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">

          <Link href="/checkout"
            className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-[#ff3f34] font-semibold text-lg text-white flex transition-all duration-500 hover:bg-[#e6443c]">Checkout
            <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
              <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" stroke-width="1.6"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}