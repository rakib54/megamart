"use client";

import { useState } from "react";

export default function ChangePassword() {
  const [passwordState, setPasswordState] = useState({
    oldPassword: "",
    newPassword: "",
    retypeNewPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPasswordState({
      ...passwordState,
      [name]: value,
    });
  };

  const doPasswordChange = async (e) => {
    e.preventDefault();

    // need to be done
  };

  return (
    <div>
      <h5 className="text-lg font-semibold mb-4">Change password :</h5>
      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
      <form onSubmit={doPasswordChange}>
        <div className="grid grid-cols-1 gap-5">
          <div>
            <label className="mb-2 block">Old password :</label>
            <input
              className="w-full p-2"
              type="password"
              name="oldPassword"
              placeholder="Old password"
              onChange={handleChange}
              value={passwordState.oldPassword}
              required
            />
          </div>
          <div>
            <label className="mb-2 block">New password :</label>
            <input
              className="w-full p-2"
              type="password"
              name="newPassword"
              placeholder="New password"
              onChange={handleChange}
              value={passwordState.newPassword}
              required
            />
          </div>
          <div>
            <label className="mb-2 block">Re-type New password :</label>
            <input
              className="w-full p-2"
              type="password"
              placeholder="Re-type New password"
              name="retypeNewPassword"
              onChange={handleChange}
              value={passwordState.retypeNewPassword}
              required
            />
          </div>
        </div>
        {/*end grid*/}
        <button
          className="mt-5 cursor-pointer bg-green-700 font-bold text-white px-3 py-2 rounded"
          type="submit"
        >
          Save password
        </button>
      </form>
    </div>
  );
}
