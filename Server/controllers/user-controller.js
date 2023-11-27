import User from "../models/user.js";
// Create User
export const createUser = async (req, res, next) => {
  try {
    const newUser = new User({
      Id_Kegiatan: req.body.Id_Kegiatan,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      role: req.body.role,
      divisi: req.body.divisi,
    });
    await newUser.save();
    if (!newUser) {
      res.json({ message: "terjadi Kesalahan" });
    }
    res.status(201).json({ message: "User Ditambahkan" });
  } catch (error) {
    res.status(404).json(error);
  }
};

// Get User
export const getUser = async (req, res) => {
  try {
    const user = await User.find(req.params.userId);
    if (!user) res.status(200).json({ message: "User Tidak Ditemukan" });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ message: "Terjadi Kesalahan" });
  }
};

// Get Users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

// Update User

export const updateUser = async (req, res) => {
  try {
    console.log("User ID to update: ", req.params.id);

    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        role: req.body.role,
        divisi: req.body.divisi,
      },
      { new: true }
    );

    if (!user) {
      return res
        .status(404)
        .json({ message: "terjadi kesalahan! atau user tidak ditemukan!" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// Delete User
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User telah dihapus");
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
