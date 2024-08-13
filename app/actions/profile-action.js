"use server"

import { getUser } from "@/database/queries/auth";
import { userModel } from "@/models/user-model";
import { dbConnect } from "@/service/mongo";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

export const updateUserInfo = async (email, updatedData) => {
  await dbConnect();

  try {
    await userModel.findOneAndUpdate({ email }, updatedData);
    revalidatePath("/");
  } catch (error) {
    throw new Error(error.message);
  }
}

export const updatePassword = async (email, oldPassword, newPassword) => {
  await dbConnect();
  const user = await getUser(email);

  const isMatch = await bcrypt.compare(oldPassword, user.password);

  if (!isMatch) {
    throw new Error("Old Password is incorrect!");
  }

  const hashedPassword = await bcrypt.hash(newPassword, 5);

  try {

    await userModel.findOneAndUpdate({ email }, { password: hashedPassword });

    revalidatePath("/profile")

  } catch (error) {
    throw new Error(error.message);
  }
}