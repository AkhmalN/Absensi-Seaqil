import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import userRouter from "./routes/user-router.js";
import absenRouter from "./routes/absen-router.js";
const PORT = process.env.PORT || 8081;
const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middlewares
app.use("/absensiseaqil/users", userRouter);
app.use("/absensiseaqil/present", absenRouter);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server running on port: ", PORT);
    });
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Cannot connect to MongoDB: ", err);
  });
