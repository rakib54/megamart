"use client";

import { useState } from "react";

export default function PersonalDetails({ userInfo }) {
  const [infoState, setInfoState] = useState({
    fullName: userInfo?.name,
    email: userInfo?.email,
    bio: userInfo?.bio,
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

    // need to be done
  };

  return (
    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
      <h5 className="text-lg font-semibold mb-4">Personal Details :</h5>
      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <label className="mb-2 block">
              Full Name : <span className="text-red-600">*</span>
            </label>
            <input
              className="w-full p-2"
              type="text"
              placeholder="First Name:"
              id="firstName"
              name="firstName"
              value={infoState?.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="mb-2 block">
              Your Email : <span className="text-red-600">*</span>
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
            <label className="mb-2 block">Phone No :</label>
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
            <label className="mb-2 block">Shipping Address :</label>
            <input
              className="w-full p-2"
              id="shipping"
              name="shippingAddress"
              placeholder="Shipping Address :"
              value={infoState.shippingAddress}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mb-2 block">Permanent Address :</label>
            <input
              className="w-full p-2"
              id="permanent"
              name="permanentAddress"
              placeholder="Permanent Address :"
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
