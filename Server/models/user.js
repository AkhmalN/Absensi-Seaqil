import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    Id_Kegiatan: {
      type: Number,
      required: true,
    },
    shift: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    images: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
