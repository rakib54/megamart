"use client";

import { deleteCartAfterOrderComplete } from "@/app/actions/cart-action";
import { placeOrderAfterPayment } from "@/app/actions/order-action";
import { createCheckoutSessions } from "@/app/actions/stripe";
import { useState } from "react";

export default function CheckoutForm({ userInfo, carts }) {
  const [error, setError] = useState();

  const total = carts.reduce((curr, item) => {
    return (
      curr + (item.price - (item.price * item.discount) / 100) * item.quantity
    );
  }, 0);

  const vat = total * 0.15;
  const deliveryFee = total * 0.05;

  const subTotal = total + vat + deliveryFee;

  const [orderDetails, setOrderDetails] = useState({
    userId: userInfo.id,
    subTotal: subTotal.toFixed(2),
    orderDetails: carts,
    shippingAddress: userInfo.shippingAddress || "",
    phone: userInfo.phone || "",
    houseNo: "",
    division: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setOrderDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const isNonEmptyString = (str) =>
    typeof str === "string" && str.trim() !== "";

  const isFormValid = () => {
    // Check for required string properties (excluding orderDetails which is an array)
    const requiredStringProps = [
      "shippingAddress",
      "phone",
      "houseNo",
      "division",
    ];
    return requiredStringProps.every((prop) =>
      isNonEmptyString(orderDetails[prop])
    );
  };
  const formAction = async (data) => {
    const orderDetails = {
      userId: userInfo.id,
      subTotal: data.get("subtotal"),
      orderDetails: carts,
      shippingAddress: data.get("permanentAddress"),
      phone: data.get("phone"),
      houseNo: data.get("houseNo"),
      division: data.get("division"),
    };
    const { url } = await createCheckoutSessions(data);

    try {
      if (isFormValid()) {
        setError("");
        await placeOrderAfterPayment(orderDetails); // place order
        await deleteCartAfterOrderComplete(userInfo?.id); // delete existing cart
        window.location.assign(url);
      }
    } catch (error) {
      setError(error.message);
    }
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
                  id="username"
                  name="username"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 disabled:cursor-not-allowed"
                  value={userInfo.name}
                  disabled
                  readOnly
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
                  id="email"
                  name="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 disabled:cursor-not-allowed"
                  value={userInfo.email}
                  disabled
                  readOnly
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
                  id="country"
                  name="country"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
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
                    Division*{" "}
                  </label>
                </div>
                <select
                  id="division"
                  name="division"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                  value={orderDetails.division}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Choose a Division ...
                  </option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chattogram">Chattogram</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Barisal">Barisal</option>
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
                      id="phone"
                      name="phone"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="+880779121212"
                      value={orderDetails.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="permanentAddress"
                  className="mb-2 block text-sm font-medium text-gray-900 "
                >
                  {" "}
                  Permanent Address{" "}
                </label>
                <input
                  type="text"
                  id="permanentAddress"
                  name="permanentAddress"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
                  placeholder="Khilkhet, Dhaka"
                  value={orderDetails.permanentAddress}
                  onChange={handleChange}
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
                  id="shipping-address"
                  name="shippingAddress"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
                  placeholder="Khilkhet, Dhaka"
                  value={orderDetails.shippingAddress}
                  onChange={handleChange}
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
                  id="house-no"
                  name="houseNo"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
                  placeholder="1B/20A"
                  value={orderDetails.houseNo}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
          {error && (
            <p className="text-red-600 text-sm">* Please fill out this form!</p>
          )}
          <div>
            {carts.length > 0 &&
              carts.map((cart, i) => (
                <div
                  key={cart.id}
                  className="flex justify-between items-center mb-4 text-gray-500"
                >
                  <div className="basis-1/2 flex-wrap">{cart.name}</div>
                  <div className="basis-1/6 flex-wrap text-center">
                    X{cart.quantity}
                  </div>
                  <div className="text-gray-900 basis-1/3 flex-wrap text-right">
                    $
                    {(
                      (cart.price - (cart.price * cart.discount) / 100) *
                      cart.quantity
                    ).toFixed(2)}
                  </div>
                </div>
              ))}
            <div className="-my-3 divide-y divide-gray-200">
              <dl className="flex items-center justify-between gap-4 py-3">
                <dt className="text-base font-normal text-gray-500 ">
                  Subtotal
                </dt>
                <dd className="text-base font-medium text-gray-900 ">
                  ${total.toFixed(2)}
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4 py-3">
                <dt className="text-base font-normal text-gray-500 ">
                  Delivery Fee
                </dt>
                <dd className="text-base font-medium text-gray-900 ">
                  ${deliveryFee.toFixed(2)}
                </dd>
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
          <input
            type="hidden"
            name="subtotal"
            value={`${subTotal.toFixed(2)}`}
            readOnly
          />

          <div className="space-y-3">
            <button
              type="submit"
              className={`flex w-full items-center justify-center rounded-lg bg-[#ff3f34] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#e94a42] focus:outline-none focus:ring-4  focus:ring-[#e94a42] ${
                subTotal === 0 &&
                "disabled:cursor-not-allowed disabled:bg-gray-500"
              }`}
              disabled={subTotal === 0}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
