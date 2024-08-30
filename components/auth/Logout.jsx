"use client";

import { signOut } from "next-auth/react";

export default function Logout() {
  const handleLogout = () => {
    signOut({ callbackUrl: `https://megamart-shopping.vercel.app/login` });
  };

  return (
    <button
      className="px-4 py-2 text-sm rounded font-semibold text-white border-2 border-white bg-transparent hover:bg-[#525b6f] transition duration-300"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}
