import mongoose from "mongoose";

const workPermitSchema = new mongoose.Schema(
  {
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    id_msib: {
      type: Number,
      // required: true,
    },
    username: {
      type: String,
      required: true,
    },
    divisi: {
      type: String,
      required: true,
    },
    file: {
      data: Buffer,
      contentType: String,
    },
    status: {
      type: String,
      required: true,
    },
    tanggal_pengajuan: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Work_Permit", workPermitSchema);
