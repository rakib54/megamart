"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation({ categories }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow-md bg-gray-100 tracking-wide relative z-50">
      <div className="flex flex-wrap justify-center px-10 py-5 relative">
        <div
          style={{ display: isOpen ? "block" : "none" }}
          id="collapseMenu"
          className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <button
            onClick={handleClick}
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          <ul className="lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="max-lg:border-b max-lg:pb-4 px-3 lg:hidden">
              <Link href="/" className="text-2xl font-Kaushan">
                MegaMart
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
              <Link
                href="/"
                className="hover:text-[#656c78] transition duration-150 text-[#2f3542] font-semibold block text-[15px]"
              >
                Home
              </Link>
            </li>
            <li className="group max-lg:border-b max-lg:px-3 max-lg:py-3 relative">
              <Link
                href="javascript:void(0)"
                className="hover:text-[#656c78] transition duration-150 hover:fill-[white] text-[#2f3542] font-semibold text-[15px] block"
              >
                Categories
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name="16"
                    fill="#2f3542"
                    data-original="#000000"
                  />
                </svg>
              </Link>
              <ul className="absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                {categories.map((category) => (
                  <li key={category.name} className="border-b py-3">
                    <Link
                      href={`/shop?category=${category.name}`}
                      className="hover:text-[#656c78] hover:fill-[#656c78] text-gray-600 font-semibold text-[15px] block"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        className="mr-4 inline-block"
                        viewBox="0 0 407.7 407.7"
                      >
                        <path
                          d="M405.5 118.021a7.93 7.93 0 0 0-.29-.29l-84.16-74.8a7.994 7.994 0 0 0-2.64-1.6l-60.88-21.76a8 8 0 0 0-10.72 7.12c0 1.76-2.64 42.32-43.2 42.96-40.8-.64-43.36-41.2-43.44-42.96a8 8 0 0 0-10.64-7.12l-60.8 22c-.976.357-1.872.9-2.64 1.6l-83.6 74.56a8 8 0 0 0 0 11.6l66.56 67.28v184a8 8 0 0 0 8 8h253.6a8 8 0 0 0 8-8v-184l66.56-67.28a8 8 0 0 0 .29-11.31zm-67.09 55.79v-37.12a8 8 0 0 0-16 0v235.52H84.73v-235.52a8 8 0 0 0-16 0v37.2l-49.2-49.84 76.16-68.16 50.08-18.08c6.204 31.966 37.147 52.851 69.113 46.647 23.607-4.582 42.065-23.04 46.647-46.647l50.08 18.08 75.92 68.16-49.12 49.76z"
                          data-original="#000000"
                        />
                      </svg>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
              <Link
                href="/shop"
                className="hover:text-[#656c78] transition duration-150 text-[#2f3542] font-semibold text-[15px] block"
              >
                Shop
              </Link>
            </li>
          </ul>
        </div>

        <div id="toggleOpen" className="flex ml-auto lg:hidden">
          <button onClick={handleClick}>
            <svg
              className="w-8 h-8"
              fill="#2f3542"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
