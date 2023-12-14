import mongoose from "mongoose";

const presenceKeluarSchema = new mongoose.Schema(
  {
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    id_msib: {
      type: Number,
      //
    },
    shift: {
      type: String,
    },
    username: {
      type: String,
    },
    divisi: {
      type: String,
    },

    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },

    image: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Presence_out", presenceKeluarSchema);
