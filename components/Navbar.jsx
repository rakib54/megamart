import { auth } from "@/auth";
import { getCartsForUser } from "@/database/queries/cart";
import { getWishLists } from "@/database/queries/wishlist";
import Link from "next/link";
import { FaRegHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import Logout from "./auth/Logout";

export default async function Navbar() {
  const session = await auth();

  const carts = await getCartsForUser(session?.user?.id);
  const wishLists = await getWishLists(session?.user?.id);

  return (
    <nav className=" bg-neutral-700/95 w-full text-white">
      <div className="container mx-auto flex items-center justify-between px-5 py-4 text-white">
        <Link href="/" className="text-2xl font-bold">
          Mega Mart
        </Link>

        <form className="max-w-lg mx-auto">
          <div className="flex">
            <div className="relative md:w-[350px] mx-auto">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 outline-none rounded-l"
                placeholder="Search Products .."
                required
              />
              <button
                type="submit"
                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#5f4c4c] rounded-e-lg border border-[#5f4c4c] hover:bg-[#2f2626] hover:border-[#2f2626] focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
        <div className="block md:hidden">
          <i className="fa-solid fa-bars text-2xl"></i>
        </div>

        <div className="hidden md:flex gap-5 items-center justify-center">
          {session?.user?.email ? (
            <p>Welcome, {session.user.name.split(" ")[0]}</p>
          ) : (
            <Link href="/login" className="flex items-center gap-1">
              <FaUser />
              Login
            </Link>
          )}
          {session?.user?.email && <Logout />}
          <div>
            <Link href="/profile">
              <FaUser className="text-2xl" />
            </Link>
          </div>
          <div className="relative">
            <Link href="/favorites">
              <FaRegHeart className="text-3xl" />
              {wishLists?.productId?.length > 0 && (
                <p className="absolute -top-3 -right-2 bg-green-500 rounded-full px-2 text-white">
                  {wishLists?.productId?.length}
                </p>
              )}
            </Link>
          </div>
          <div className="relative">
            <Link href="/cart">
              <FaShoppingCart className="text-3xl" />

              {carts?.length > 0 && (
                <p className="absolute -top-3 -right-2 bg-green-500 rounded-full px-2 text-white">
                  {carts?.length}
                </p>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
