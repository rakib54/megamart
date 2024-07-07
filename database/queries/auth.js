import { userModel } from "@/models/user-model";
import { dbConnect } from "@/service/mongo";

export const registerUser = async (user) => {
  await dbConnect();

  try {
    await userModel.create(user);

  } catch (error) {
    throw new Error(error.message)
  }
}