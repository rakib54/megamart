"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";

export default function SocialLogin() {
  const handleGoogleLogin = () => {
    signIn("google", {
      callbackUrl: "http://localhost:3000",
    });
  };

  return (
    <div className="mt-4 flex gap-4">
      <button
        onClick={handleGoogleLogin}
        className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
      >
        google
      </button>
      <Link
        href="#"
        className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
      >
        facebook
      </Link>
    </div>
  );
}
