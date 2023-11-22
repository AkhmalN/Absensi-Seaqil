import express from "express";
import {
  createPresent,
  deletePresence,
  getPresence,
  getPresences,
} from "../controllers/presensi-controller.js";

const router = express.Router();

router.post("/", createPresent);
router.get("/", getPresences);
router.get("/:id", getPresence);
// router.get("/:id", getUser);
// router.put("/:id", updateUser);
router.delete("/:id", deletePresence);

export default router;
