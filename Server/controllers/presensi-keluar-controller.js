import path from "path";
import PresenceOut from "../models/presensi_keluar.js";
import fs from "fs";

// Create Presensi
export const createPresent = async (req, res, next) => {
  try {
    const { id_msib, username, divisi, shift, latitude, longitude, imageSrc } =
      req.body;
    // Decode the base64 image string
    const base64Data = imageSrc.replace(/^data:image\/jpeg;base64,/, "");
    const imageBuffer = Buffer.from(base64Data, "base64");
    const newPresence = new PresenceOut({
      id_msib: id_msib,
      shift: shift,
      username: username,
      divisi: divisi,
      image: {
        data: imageBuffer,
        contentType: "image/jpeg",
      },
      latitude: latitude,
      longitude: longitude,
    });
    await newPresence.save();
    if (!newPresence) {
      res.status(404).json({ message: "terjadi Kesalahan" });
    }
    res.status(200).json({ message: "Selamat Pulang" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json(error);
  }
};

// Read Presents

export const getPresences = async (req, res, next) => {
  try {
    const presences = await PresenceOut.find();
    return res.status(201).json(presences);
  } catch (error) {
    return res.status(404).json(error);
  }
};

// Read Presence
export const getPresence = async (req, res, next) => {
  try {
    const presence = await PresenceOut.findOne({ id_msib: req.params.id });
    return res
      .status(200)
      .json({ message: `Hai, ${PresenceOut.username}`, presence });
  } catch (error) {
    return res.status(404).json(error);
  }
};

// Update Presence

export const updatePresence = async (req, res) => {
  try {
    const { id_msib, shift, username, divisi } = req.body;

    const presence = await PresenceOut.findOneAndUpdate(
      { _id: req.params.id },
      {
        id_msib,
        shift,
        username,
        divisi,
      },
      { new: true }
    );
    console.log(`Presence to update : ${presence._id}`);
    if (!presence) {
      return res.status(404).json({ message: "Presensi tidak ditemukan" });
    }
    return res.status(200).json(presence);
  } catch (error) {
    return res.status(404).json({ message: "Terjadi kesalahan pada server" });
  }
};

// Delete Presence
export const deletePresence = async (req, res) => {
  try {
    // ID Presence not using id User or id_msib
    const presence = await PresenceOut.findByIdAndDelete(req.params.id);
    if (!presence) {
      return res.status(404).json({ message: "Data Presensi tidak ditemukan" });
    }
    return res
      .status(201)
      .json({ message: `Presensi ${presence.username} telah di hapus` });
  } catch (error) {
    return res.status(404).json({ message: "Terjadi Kesalahan pada Server!" });
  }
};
