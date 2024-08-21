'use server'

import { signIn } from "@/auth";
import { getUser, registerUser } from "@/database/queries/auth";

import { dbConnect } from "@/service/mongo";
import { revalidatePath } from "next/cache";

export const register = async (userInfo) => {
  await dbConnect();

  try {
    const register = await registerUser(userInfo);
    return register;
    revalidatePath("/");

  } catch (error) {
    throw new Error("*Email Already Exists");
  }
}

export const Login = async (credential) => {
  await dbConnect();
  try {
    const response = await signIn("credentials", {
      email: credential.email,
      password: credential.password,
      redirect: false
    });

    return response;

  } catch (error) {
    throw new Error("Username or Password is wrong!");
  }
}

export const getUserId = async (email) => {
  await dbConnect();

  try {
    const user = await getUser(email);

    return user.id;

  } catch (error) {
    throw new Error(error.message)
  }
}

