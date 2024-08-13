"use client";

import { updateUserInfo } from "@/app/actions/profile-action";
import { useState } from "react";
import { toast } from "sonner";

export default function PersonalDetails({ userInfo }) {
  const [infoState, setInfoState] = useState({
    name: userInfo?.name,
    email: userInfo?.email,
    phone: userInfo?.phone,
    shippingAddress: userInfo?.shippingAddress,
    permanentAddress: userInfo?.permanentAddress,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInfoState({
      ...infoState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateUserInfo(userInfo.email, infoState);
      toast.success("profile is updated successfully.");
    } catch (error) {
      throw new Error(error.message);
    }

    // need to be done
  };

  return (
    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
      <h5 className="text-lg font-semibold mb-4">Personal Details :</h5>
      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <label className="mb-2 block font-semibold text-gray-600">
              Full Name :
            </label>
            <input
              className="w-full p-2"
              type="text"
              placeholder="Your Full Name:"
              id="name"
              name="name"
              value={infoState?.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="mb-2 block font-semibold text-gray-600">
              Your Email :
            </label>
            <input
              className="w-full p-2"
              type="email"
              placeholder="Email"
              name="email"
              value={infoState?.email}
              disabled
            />
          </div>
          <div>
            <label className="mb-2 block font-semibold text-gray-600">
              Phone No :
            </label>
            <input
              className="w-full p-2"
              name="phone"
              id="phone"
              type="text"
              placeholder="Phone :"
              value={infoState?.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mb-2 block font-semibold text-gray-600">
              Shipping Address :
            </label>
            <input
              className="w-full p-2"
              id="shipping"
              name="shippingAddress"
              placeholder="Add Your Shipping Address"
              value={infoState.shippingAddress}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mb-2 block font-semibold text-gray-600">
              Permanent Address :
            </label>
            <input
              className="w-full p-2"
              id="permanent"
              name="permanentAddress"
              placeholder="Add Your Permanent Address"
              value={infoState.permanentAddress}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          className="mt-5 cursor-pointer bg-green-700 font-bold text-white px-3 py-2 rounded"
          type="submit"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
