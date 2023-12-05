import User from "../models/user.js";

export const Auth = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (!user) {
      return res
        .status(404)
        .json({ message: "Username atau Password tidak ditemukan!", user });
    }
    return res.status(200).json({ message: "Berhasil Login!" });
  } catch (error) {
    return res.status(500).json({ message: "Terjadi Kesalahan pada server!" });
  }
};
