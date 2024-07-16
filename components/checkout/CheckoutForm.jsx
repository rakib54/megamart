"use client";

import { createCheckoutSessions } from "@/app/actions/stripe";

export default function CheckoutForm({ userId, carts }) {
  const Total = carts.reduce((curr, item) => {
    return curr + item.price * item.quantity;
  }, 0);

  const vat = Total * 0.15;

  const subTotal = Total + vat;

  const formAction = async () => {
    const { url } = await createCheckoutSessions();
    window.location.assign(url);
  };

  return (
    <form action={formAction} className="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
        <div className="min-w-0 flex-1 space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 ">
              Delivery Details
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="your_name"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  {" "}
                  Your name
                </label>
                <input
                  type="text"
                  id="your_name"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Rakibur"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="your_email"
                  className="mb-2 block text-sm font-medium text-gray-900 "
                >
                  {" "}
                  Your email*{" "}
                </label>
                <input
                  type="email"
                  id="your_email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                  placeholder="name@gamil.com"
                  required
                />
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <label
                    htmlFor="select-country-input-3"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Country*{" "}
                  </label>
                </div>
                <select
                  id="select-country-input-3"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
                >
                  <option selected>Bangladesh</option>
                </select>
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <label
                    htmlFor="select-city-input-3"
                    className="block text-sm font-medium text-gray-900"
                  >
                    City*{" "}
                  </label>
                </div>
                <select
                  id="select-city-input-3"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Choose a City ...
                  </option>
                  <option value="Dh">Dhaka</option>
                  <option value="Ch">Chattogram</option>
                  <option value="Sy">Sylhet</option>
                  <option value="Ra">Rajshahi</option>
                  <option value="Ran">Rangpur</option>
                  <option value="Kh">Khulna</option>
                  <option value="Br">Barisal</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="phone-input-3"
                  className="mb-2 block text-sm font-medium text-gray-900 "
                >
                  {" "}
                  Phone Number*{" "}
                </label>
                <div className="flex items-center">
                  <div className="relative w-full">
                    <input
                      type="text"
                      id="phone-input"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      placeholder="123-456-7890"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900 "
                >
                  {" "}
                  Email{" "}
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
                  placeholder="name@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="company_name"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Shipping Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
                  placeholder="Khilkhet, Dhaka"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="vat_number"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  House No
                </label>
                <input
                  type="text"
                  id="vat_number"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
                  placeholder="1B/20A"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100"
                >
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-7 7V5"
                    />
                  </svg>
                  Add new address
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
          <div className="flow-root">
            <div className="-my-3 divide-y divide-gray-200 ">
              <dl className="flex items-center justify-between gap-4 py-3">
                <dt className="text-base font-normal text-gray-500 ">
                  Subtotal
                </dt>
                <dd className="text-base font-medium text-gray-900 ">
                  ${Total.toFixed(2)}
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4 py-3">
                <dt className="text-base font-normal text-gray-500 ">
                  Delivery Fee
                </dt>
                <dd className="text-base font-medium text-gray-900 ">$00</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4 py-3">
                <dt className="text-base font-normal text-gray-500 ">Tax</dt>
                <dd className="text-base font-medium text-gray-900 ">
                  ${vat.toFixed(2)}
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4 py-3">
                <dt className="text-base font-bold text-gray-900 ">Total</dt>
                <dd className="text-base font-bold text-gray-900 ">
                  ${subTotal.toFixed(2)}
                </dd>
              </dl>
            </div>
          </div>

          <div className="space-y-3">
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-lg bg-[#ff3f34] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#e94a42] focus:outline-none focus:ring-4  focus:ring-[#e94a42]"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
