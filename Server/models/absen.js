import mongoose from "mongoose";

const absenSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    Id_Kegiatan: {
      type: Number,
      required: true,
      ref: "User",
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    divisi: {
      type: String,
      required: true,
    },
    status_absen: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Absen", absenSchema);
