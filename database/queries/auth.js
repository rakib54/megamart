import { userModel } from "@/models/user-model";
import { dbConnect } from "@/service/mongo";
import { replaceMongoIdWithObject } from "@/utils/db-utils";

export const registerUser = async (user) => {
  await dbConnect();

  try {
    await userModel.create(user);

  } catch (error) {
    throw new Error(error.message)
  }
}

export const getUser = async (email) => {
  await dbConnect();

  try {
    const user = await userModel.findOne({ email }).lean();

    return replaceMongoIdWithObject(user);
  } catch (error) {
    throw new Error(error.message);
  }
}