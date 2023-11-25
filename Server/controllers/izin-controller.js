import Izin from "../models/izin.js";

// Create Izin
export const createIzin = async (req, res) => {
  try {
    const { id_user, id_msib, username, divisi, status } = req.body;
    const file = req.file.filename;
    const newIzin = new Izin({
      id_user: id_user,
      id_msib: id_msib,
      username: username,
      divisi: divisi,
      file: file,
      status: status,
    });
    await newIzin.save();
    if (!newIzin) {
      return res.status(404).json({ message: "Terjadi kesalahan" });
    } else {
      return res
        .status(200)
        .json({ message: "Pemintaan izin telah dikirim", newIzin });
    }
  } catch (error) {
    return res.status(404).json({ message: "Terjadi kesalahan pada server" });
  }
};

// GET All Izin
export const getALlIzin = async (req, res) => {
  try {
    const dataIzin = await Izin.find();
    if (dataIzin) {
      return res.status(200).json(dataIzin);
    }
  } catch (error) {
    return res.status(404).json(error);
  }
};
// GET Izin
export const getIzin = async (req, res) => {
  try {
    const dataIzinUser = await Izin.findOne({ id_msib: req.params.id });
    return res.status(200).json(dataIzinUser);
  } catch (error) {
    return res.status(404).json({ message: "Terjadi kesalahan pada server!" });
  }
};
// Update Izin
export const updateIzin = async (req, res) => {
  
};
// Delete Izin
export const deleteIzin = async (req, res) => {};
