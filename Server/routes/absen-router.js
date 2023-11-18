import express from "express";
import {
  createPresent,
  getPresent,
  getPresents,
} from "../controllers/absen-controller.js";

const router = express.Router();

router.post("/create_present", createPresent);
router.get("/", getPresents);
router.get("/:id", getPresent);
// router.get("/:id", getUser);
// router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);

export default router;
