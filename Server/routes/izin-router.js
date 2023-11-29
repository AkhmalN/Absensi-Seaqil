import {
  createIzin,
  getALlIzin,
  getIzin,
  updateIzin,
  deleteIzin,
} from "../controllers/izin-controller.js";
import express from "express";
import multer from "multer";
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/surat_izin");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("file"), createIzin);
router.get("/", getALlIzin);
router.get("/:id", getIzin);
router.patch("/:id", updateIzin);
router.delete("/:id", deleteIzin);

export default router;
