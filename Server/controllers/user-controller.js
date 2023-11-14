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
      return res.json({ message: "terjadi Kesalahan" });
    }
    return res.status(201).json({ message: "User Ditambahkan" });
  } catch (error) {
    return res.status(404).json(error);
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

// Delete
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User telah dihapus");
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

// Update Users

// export const updateUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { username, email, newPassword, role, image } = req.body;
//     const updatedData = { username, email, role, image };
//     if (newPassword) {
//       if (newPassword.length < 6) {
//         return res
//           .status(400)
//           .json({ message: "password kurang dari 6 karakter" });
//       }
//       const salt = bcrypt.genSaltSync(10);
//       const hashedPassword = bcrypt.hashSync(newPassword, salt);
//       updatedData.password = hashedPassword;
//     }
//     const user = await User.findByIdAndUpdate(id, updatedData, { new: true });

//     if (!user) {
//       return res.status(404).json({ message: "Gagal dalam Mengubah Data" });
//     }

//     res.status(200).json(user);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Internal Server Error", error: error.message });
//   }
// };

// export const getUserPatrol = async (req, res, next) => {
//   const patrols = await Patrol.findById(req.params.createdBy);
//   res.status(201).json(patrols);
//   // res.send("User patrol endpoint");
// };
