"use client";

import { signOut } from "next-auth/react";

export default function Logout() {
  const handleLogout = () => {
    signOut({ callbackUrl: `http://localhost:3000/login` });
  };

  return <button onClick={handleLogout}>Logout</button>;
}
