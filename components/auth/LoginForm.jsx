"use client";

import { Login } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState();
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const formData = new FormData(event.currentTarget);

      const email = formData.get("email");
      const password = formData.get("password");

      const response = await Login({ email, password });

      if (response) {
        router.push("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#ff3f34] focus:border-[#ff3f34] block w-full p-2.5"
            required=""
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="remember" className="text-gray-500 ">
                Remember me
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-[#ff3f34] hover:bg-[#ff2e23] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700"
        >
          LOGIN
        </button>
      </form>
    </>
  );
}
