import Presence from "../models/presensi.js";

// Create Presensi
export const createPresent = async (req, res, next) => {
  try {
    const { id_user, id_msib, username, divisi, shift } = req.body;
    const newPresence = new Presence({
      id_user: id_user,
      id_msib: id_msib,
      shift: shift,
      username: username,
      divisi: divisi,
    });
    await newPresence.save();
    if (!newPresence) {
      return res.json({ message: "terjadi Kesalahan" });
    }
    return res
      .status(201)
      .json({ message: `Selamat Bekerja ${newPresence.username}` });
  } catch (error) {
    return res.status(404).json(error);
  }
};

// Read Presents

export const getPresences = async (req, res, next) => {
  try {
    const presences = await Presence.find();
    return res.status(201).json(presences);
  } catch (error) {
    return res.status(404).json(error);
  }
};

// Read Present
export const getPresence = async (req, res, next) => {
  try {
    // console.log(req.params);
    const presence = await Presence.findOne({ id_msib: req.params.id });
    return res.status(201).json({ presence });
  } catch (error) {
    return res.status(404).json(error);
  }
};

// Update Presence

export const updatePresence = async (req, res) => {
  try {
    const presence = await Presence.findByIdAndUpdate(req.params.id);
    if (!presence) {
      return res.status(404).json({ message: "Presensi tidak ditemukan" });
    }
    return res.status(201).json(presence);
  } catch (error) {
    return res.status(404).json({ message: "Terjadi kesalahan pada server" });
  }
};

// Delete Presence
export const deletePresence = async (req, res) => {
  try {
    // ID Presence not using id User or id_msib
    const presence = await Presence.findByIdAndDelete(req.params.id);
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
