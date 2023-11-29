import express from "express";
import {
  createPresent,
  deletePresence,
  getPresence,
  getPresences,
  updatePresence,
} from "../controllers/presensi-controller.js";
import multer from "multer";
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/presensi");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("image"), createPresent);
router.get("/", getPresences);
router.get("/:id", getPresence);
router.patch("/:id", updatePresence);
router.delete("/:id", deletePresence);

export default router;
