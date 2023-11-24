import mongoose from "mongoose";

const logPresenceSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

export default mongoose.model("Log_Presence", logPresenceSchema);
