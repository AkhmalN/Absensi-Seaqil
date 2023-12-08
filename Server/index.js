import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import userRouter from "./routes/user-router.js";
import presensiRouter from "./routes/presensi-router.js";
import izinRouter from "./routes/izin-router.js";
import authRouter from "./routes/auth-router.js";
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
app.use("/api/v1/auth", authRouter);

// Use import.meta.url to get the current module's URL
const __filename = new URL(import.meta.url).pathname;
// Use path.dirname to extract the directory name
const __dirname = path.dirname(__filename);

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
