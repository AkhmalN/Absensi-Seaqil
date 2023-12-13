import User from "../models/user.js";
// Create User
export const createUser = async (req, res, next) => {
  try {
    const {
      id_msib,
      shift,
      username,
      email,
      password,
      role,
      divisi,
      akunImage,
    } = req.body;

    const base64Data = akunImage.replace(/^data:image\/jpeg;base64,/, "");
    const imageBuffer = Buffer.from(base64Data, "base64");
    const newUser = new User({
      id_msib,
      shift,
      username,
      email,
      password,
      role,
      divisi,
      image: {
        data: imageBuffer,
        contentType: "image/jpeg",
      },
    });
    await newUser.save();
    if (!newUser) {
      res.json({ message: "terjadi Kesalahan" });
    }
    return res.status(200).json({ message: "User Ditambahkan" });
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

// Get User
export const getUser = async (req, res) => {
  try {
    const user = await User.find(req.params.id);
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
    const {
      id_msib,
      shift,
      username,
      email,
      password,
      role,
      divisi,
      akunImage,
    } = req.body;
    const base64Data = akunImage.replace(/^data:image\/jpeg;base64,/, "");
    const imageBuffer = Buffer.from(base64Data, "base64");
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        id_msib,
        shift,
        username,
        email,
        password,
        role,
        divisi,
        image: {
          data: imageBuffer,
          contentType: "image/jpeg",
        },
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
    res.status(200).json({ message: "User telah dihapus" });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
