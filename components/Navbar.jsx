import { auth } from "@/auth";
import { getCartsForUser } from "@/database/queries/cart";
import { getWishLists } from "@/database/queries/wishlist";
import Link from "next/link";
import { FaRegHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import Logout from "./auth/Logout";
import Search from "./Search";

export default async function Navbar({ show }) {
  const session = await auth();

  const carts = await getCartsForUser(session?.user?.id);
  const wishLists = await getWishLists(session?.user?.id);

  return (
    <nav className=" bg-[#2f3542] w-full text-white">
      <div className="container mx-auto flex items-center justify-between px-5 py-4 text-white">
        <Link href="/" className="text-2xl font-Kaushan">
          MegaMart
        </Link>

        {show && (
          <>
            <Search />
            <div className="block md:hidden">
              <i className="fa-solid fa-bars text-2xl"></i>
            </div>

            <div className="flex gap-6 items-center justify-center">
              {session?.user?.email ? (
                <p className="hidden lg:block"></p>
              ) : (
                <Link href="/login" title="Login">
                  <button className="px-4 py-2 text-sm rounded font-semibold text-white border-2 border-white bg-transparent hover:bg-[#525b6f] transition duration-300">
                    Sign In
                  </button>
                </Link>
              )}
              {session?.user?.email && <Logout />}
              <div className={`${session ? "block" : "hidden"}`}>
                {session && (
                  <Link
                    title="Your Profile"
                    href="/profile"
                    className="hover:text-gray-300 transition duration-150"
                  >
                    <FaUser className="text-2xl" />
                  </Link>
                )}
              </div>
              <div className="relative">
                <Link
                  title="Your Wishlist"
                  href="/wishlist"
                  className="hover:text-gray-300 transition duration-150"
                >
                  <FaRegHeart className="text-3xl" />
                  {wishLists?.productId?.length > 0 && (
                    <p className="absolute -top-3 -right-2 bg-red-500 rounded-full px-2 text-white">
                      {wishLists?.productId?.length}
                    </p>
                  )}
                </Link>
              </div>
              <div className="relative">
                <Link
                  title="Your Cart"
                  href="/cart"
                  className="hover:text-gray-300 transition duration-150"
                >
                  <FaShoppingCart className="text-3xl" />

                  {carts?.length > 0 && (
                    <p className="absolute -top-3 -right-2 bg-red-500 rounded-full px-2 text-white">
                      {carts?.length}
                    </p>
                  )}
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
