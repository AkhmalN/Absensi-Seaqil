import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import userRouter from "./routes/user-router.js";
import presensiRouter from "./routes/presensi-router.js";
import izinRouter from "./routes/izin-router.js";
const PORT = process.env.PORT || 8081;
const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Middlewares
app.use("/api/v1/users", userRouter);
app.use("/api/v1/presence", presensiRouter);
app.use("/api/v1/work_permit", izinRouter);

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
