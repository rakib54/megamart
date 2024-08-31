"use client";

import { updatePassword } from "@/app/actions/profile-action";
import { useState } from "react";
import { toast } from "sonner";

export default function ChangePassword({ email }) {
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
    setError("");

    if (passwordState.newPassword !== passwordState.retypeNewPassword) {
      setError("New Password and retype New password is not matched!");
      return;
    }

    try {
      await updatePassword(
        email,
        passwordState.oldPassword,
        passwordState.newPassword
      );
      toast.success("Password is updated successfully");
      reset();
    } catch (error) {
      setError(error.message);
    }
  };

  const reset = () => {
    setPasswordState({
      oldPassword: "",
      newPassword: "",
      retypeNewPassword: "",
    });
  };

  return (
    <div>
      <h5 className="text-lg font-semibold mb-4">Change password :</h5>
      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
      <form onSubmit={doPasswordChange}>
        <div className="grid grid-cols-1 gap-5">
          <div>
            <label className="mb-2 block font-semibold text-gray-600">
              Old password :
            </label>
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
            <label className="mb-2 block font-semibold text-gray-600">
              New password :
            </label>
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
            <label className="mb-2 block font-semibold text-gray-600">
              Re-type New password :
            </label>
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
          className="mt-5 cursor-pointer bg-[#2f3542] hover:bg-[#525b6f] transition duration-300 font-semibold text-white px-3 py-2 rounded"
          type="submit"
        >
          Save password
        </button>
      </form>
    </div>
  );
}
