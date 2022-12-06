import mongoose from "mongoose";

export const connection = () => {
  const url = process.env.MONGODB_URL;
  mongoose.connect(url);

  mongoose.connection.on("connected", () => {
    console.log("Database connected Successfully");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });

  mongoose.connection.on("error", (error) => {
    console.log("Error while connecting with the database ", error.message);
  });
};
