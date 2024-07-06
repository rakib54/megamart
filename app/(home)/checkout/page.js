export default function CheckoutPage() {
  return (
    <section class="bg-white py-8 antialiased md:py-16">
      <form action="#" class="mx-auto max-w-screen-xl px-4 2xl:px-0">

        <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
          <div class="min-w-0 flex-1 space-y-8">
            <div class="space-y-4">
              <h2 class="text-xl font-semibold text-gray-900 ">Delivery Details</h2>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label for="your_name" class="mb-2 block text-sm font-medium text-gray-900"> Your name
                  </label>
                  <input type="text" id="your_name"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Bonnie Green" required />
                </div>

                <div>
                  <label for="your_email" class="mb-2 block text-sm font-medium text-gray-900 "> Your
                    email* </label>
                  <input type="email" id="your_email"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="name@flowbite.com" required />
                </div>

                <div>
                  <div class="mb-2 flex items-center gap-2">
                    <label for="select-country-input-3" class="block text-sm font-medium text-gray-900">
                      Country* </label>
                  </div>
                  <select id="select-country-input-3"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 ">
                    <option selected>Bangladesh</option>
                  </select>
                </div>

                <div>
                  <div class="mb-2 flex items-center gap-2">
                    <label for="select-city-input-3" class="block text-sm font-medium text-gray-900">
                      City* </label>
                  </div>
                  <select id="select-city-input-3"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 ">
                    <option selected value="Dh">Dhaka</option>
                    <option value="Ch">Chattogram</option>
                    <option value="Sy">Sylhet</option>
                    <option value="Ra">Rajshahi</option>
                  </select>
                </div>

                <div>
                  <label for="phone-input-3" class="mb-2 block text-sm font-medium text-gray-900 "> Phone
                    Number* </label>
                  <div class="flex items-center">

                    <div class="relative w-full">
                      <input type="text" id="phone-input"
                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                    </div>
                  </div>
                </div>

                <div>
                  <label for="email" class="mb-2 block text-sm font-medium text-gray-900 "> Email </label>
                  <input type="email" id="email"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
                    placeholder="name@email.com" required />
                </div>

                <div>
                  <label for="company_name" class="mb-2 block text-sm font-medium text-gray-900">Shipping Address</label>
                  <input type="text" id="address"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
                    placeholder="Khilkhet, Dhaka" required />
                </div>

                <div>
                  <label for="vat_number" class="mb-2 block text-sm font-medium text-gray-900">House No
                  </label>
                  <input type="text" id="vat_number"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
                    placeholder="1B/20A" required />
                </div>

                <div class="sm:col-span-2">
                  <button type="submit"
                    class="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100">
                    <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 12h14m-7 7V5" />
                    </svg>
                    Add new address
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
            <div class="flow-root">
              <div class="-my-3 divide-y divide-gray-200 ">
                <dl class="flex items-center justify-between gap-4 py-3">
                  <dt class="text-base font-normal text-gray-500 ">Subtotal</dt>
                  <dd class="text-base font-medium text-gray-900 ">$8,094.00</dd>
                </dl>

                <dl class="flex items-center justify-between gap-4 py-3">
                  <dt class="text-base font-normal text-gray-500 ">Delivery Fee</dt>
                  <dd class="text-base font-medium text-gray-900 ">$99</dd>
                </dl>

                <dl class="flex items-center justify-between gap-4 py-3">
                  <dt class="text-base font-normal text-gray-500 ">Tax</dt>
                  <dd class="text-base font-medium text-gray-900 ">$199</dd>
                </dl>

                <dl class="flex items-center justify-between gap-4 py-3">
                  <dt class="text-base font-bold text-gray-900 ">Total</dt>
                  <dd class="text-base font-bold text-gray-900 ">$8,392.00</dd>
                </dl>
              </div>
            </div>

            <div class="space-y-3">
              <button type="submit"
                class="flex w-full items-center justify-center rounded-lg bg-[#ff3f34] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#e94a42] focus:outline-none focus:ring-4  focus:ring-[#e94a42]">Proceed
                to Payment</button>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}