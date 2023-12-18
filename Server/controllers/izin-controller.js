import Izin from "../models/izin.js";

// Create Izin
export const createIzin = async (req, res) => {
  try {
    const { id_msib, username, divisi, status, files, tanggal_pengajuan } =
      req.body;
    const base64Data = files.replace(/^data:application\/pdf;base64,/, "");
    const fileBuffer = Buffer.from(base64Data, "base64");
    const newIzin = new Izin({
      id_msib,
      username,
      divisi,
      file: {
        data: fileBuffer,
        contentType: "pdf",
      },
      status,
      tanggal_pengajuan,
    });
    await newIzin.save();
    if (!newIzin) {
      return res.status(404).json({ message: "Terjadi kesalahan" });
    } else {
      return res
        .status(200)
        .json({ message: "Pemintaan izin telah dikirim", Izin: newIzin });
    }
  } catch (error) {
    console.log(error);
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
  try {
    const { id_msib, username, divisi, status } = req.body;
    if (!id_msib || !username || !divisi || !status) {
      return res.status(400).json({ message: "Semua field harus diisi!" });
    }

    const izin = await Izin.findOneAndUpdate(
      { _id: req.params.id },
      { id_msib, username, divisi, status },
      { new: true }
    );

    if (!izin) {
      return res.status(404).json({
        message: "Terjadi kesalahan! atau data izin tidak ditemukan!",
      });
    }

    return res.status(200).json(izin);
  } catch (error) {
    console.error("Error in updateIzin:", error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server!" });
  }
};
// Delete Izin
export const deleteIzin = async (req, res) => {
  try {
    const izin = await Izin.findOneAndDelete({ _id: req.params.id });
    if (izin) {
      return res
        .status(200)
        .json({ message: `Data Izin ${izin.username} telah dihapus` });
    }
  } catch (error) {}
};

// Detail View

export const getFile = async (req, res) => {
  try {
    const izin = await Izin.findOne({ _id: req.params.id });

    if (!izin) {
      return res.status(404).json({ message: "dokumen tidak ditemukan!" });
    }
    res.setHeader("Content-Type", izin.file.contentType);
    res.send(izin.file.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
