import User from "../models/user.js";

export const Auth = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Username atau Password tidak ditemukan!", user });
    }
    const userData = {
      id_msib: user.id_msib,
      shift: user.shift,
      username: user.username,
      divisi: user.divisi,
    };
    return res.status(200).json({ message: "Berhasil Login!", user: userData });
  } catch (error) {
    return res.status(500).json({ message: "Terjadi Kesalahan pada server!" });
  }
};
