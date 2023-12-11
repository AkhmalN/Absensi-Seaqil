import mongoose from "mongoose";

const presenceKeluarSchema = new mongoose.Schema(
  {
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    id_msib: {
      type: Number,
      // required: true,
    },
    shift: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    divisi: {
      type: String,
      required: true,
    },
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Presence_out", presenceKeluarSchema);
