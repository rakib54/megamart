import { orderModel } from "@/models/order-model";
import { dbConnect } from "@/service/mongo";
import { replaceMongoIdWithArray, replaceMongoIdWithObject } from "@/utils/db-utils";

export const getOrdersDetailsForUser = async (userId) => {
  await dbConnect();

  try {
    const orders = await orderModel.find({ userId: userId }).sort({ orderDate: -1 }).lean();

    return replaceMongoIdWithArray(orders);
  } catch (error) {
    throw new Error(error.message)
  }
}

export const placeOrder = async (details) => {
  await dbConnect();

  try {
    await orderModel.create(details);
  } catch (error) {
    throw new Error(error.message)
  }
}

export const getLatestOrder = async (userId) => {
  await dbConnect();

  try {
    const latestOrders = await orderModel.findOne({ userId: userId }).sort({ orderDate: -1 }).lean();

    return replaceMongoIdWithObject(latestOrders);
  } catch (error) {
    throw new Error(error.message)
  }
}