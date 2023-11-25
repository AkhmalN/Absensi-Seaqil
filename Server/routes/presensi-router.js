import express from "express";
import {
  createPresent,
  deletePresence,
  getPresence,
  getPresences,
  updatePresence,
} from "../controllers/presensi-controller.js";

const router = express.Router();

router.post("/", createPresent);
router.get("/", getPresences);
router.get("/:id", getPresence);
router.put("/:id", updatePresence);
router.delete("/:id", deletePresence);

export default router;
