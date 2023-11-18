import Absen from "../models/absen.js";

// Create Absen
export const createPresent = async (req, res, next) => {
  try {
    const newAbsen = new Absen({
      Id_Kegiatan: req.body.Id_Kegiatan,
      username: req.body.username,
      divisi: req.body.divisi,
      status_absen: req.body.status_absen,
    });
    await newAbsen.save();
    if (!newAbsen) {
      return res.json({ message: "terjadi Kesalahan" });
    }
    return res.status(201).json({ message: "Anda sudah melakukan absensi" });
  } catch (error) {
    return res.status(404).json(error);
  }
};

// Read Presents

export const getPresents = async (req, res, next) => {
  try {
    const presents = await Absen.find();
    return res.status(201).json(presents);
  } catch (error) {
    return res.status(404).json(error);
  }
};

// Read Present
export const getPresent = async (req, res, next) => {
  try {
    const present = await Absen.findById(req.params.id);
    return res.status(201).json(present);
  } catch (error) {
    return res.status(404).json(error);
  }
};

// Delete Present
export const deletePresent = async (req, res) => {
  try {
    const presents = await Absen.findByIdAndDelete(req.params.id);
    return res
      .status(201)
      .json({ Message: `Presensi ${presents.username} telah di tolak` });
  } catch (error) {
    return res.status(404).json({ message: "Terjadi Kesalahan pada Server!" });
  }
};
