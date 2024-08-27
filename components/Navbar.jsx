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
    <nav className=" bg-neutral-700/95 w-full text-white">
      <div className="container mx-auto flex items-center justify-between px-5 py-4 text-white">
        <Link href="/" className="text-2xl font-bold">
          Mega Mart
        </Link>

        {show && (
          <>
            <Search />
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
                <Link href="/wishlist">
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
          </>
        )}
      </div>
    </nav>
  );
}
