import mongoose from "mongoose";

const workPermitSchema = new mongoose.Schema(
  {
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
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
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Work_Permit", workPermitSchema);
