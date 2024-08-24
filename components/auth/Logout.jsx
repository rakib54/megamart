"use client";

import { signOut } from "next-auth/react";

export default function Logout() {
  const handleLogout = () => {
    signOut({ callbackUrl: `https://megamart-shopping.vercel.app/login` });
  };

  return <button onClick={handleLogout}>Logout</button>;
}
