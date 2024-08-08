"use server"

import { placeOrder } from "@/database/queries/order";

export const placeOrderAfterPayment = async (details) => {
  try {
    await placeOrder(details);
  } catch (error) {
    throw new Error("Something went wrong when trying to order!");
  }
}