"use client";

import { register } from "@/app/actions";
import bcrypt from "bcryptjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterForm() {
  const [error, setError] = useState();
  const router = useRouter();

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);

      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const confirmPassword = formData.get("confirm-password");

      if (password !== confirmPassword) {
        setError("*password and confirmPassword does not match");
        return;
      }
      const hashedPassword = await bcrypt.hash(password, 5);

      const newUser = {
        name,
        email,
        password: hashedPassword,
      };

      const response = await register(newUser);

      router.push("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleRegister}>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div>
        <label
          for="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Full Name
        </label>
        <input
          type="name"
          name="name"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          placeholder="Rakibur Rahman"
          required
        />
      </div>
      <div>
        <label
          for="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          placeholder="name@company.com"
          required
        />
      </div>
      <div>
        <label
          for="password"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          required
        />
      </div>
      <div>
        <label
          for=" confirm-password"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Confirm password
        </label>
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        />
      </div>
      <div className=" flex items-start">
        <div className="flex items-center h-5">
          <input
            id="terms"
            aria-describedby="terms"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
            required=""
          />
        </div>
        <div className="ml-3 text-sm">
          <label for="terms" className="font-light text-gray-500">
            I accept the{" "}
            <a
              className="font-medium text-primary-600 hover:underline "
              href="#"
            >
              Terms and Conditions
            </a>
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="w-full text-white bg-[#ff3f34] hover:bg-[#ed4e46] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700 duration-150 transition"
      >
        Create an account
      </button>
    </form>
  );
}
