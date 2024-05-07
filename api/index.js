import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
//nQilR3gVui601BTw
//yatharth
//mongodb+srv://yatharth:<password>@mern-estate.ndnqzmc.mongodb.net/

app.listen(3000, () => {
  console.log("Server is running on port 3000!!");
});
