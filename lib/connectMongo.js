import mongoose from "mongoose";

const configUrl = `${process.env.MONGODB_URI }/${process.env.MONGODB_NAME}`;
export const Mongo = async () => {
  mongoose.connect(configUrl);
};
