import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
const PORT = process.env.PORT || 8081;
const app = express();
dotenv.config();

app.use("/", (req, res) => {
  res.send("hello gaes");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("server running on port : ", PORT);
    });
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log("Cannot connect to mongodb : ", err);
  });
