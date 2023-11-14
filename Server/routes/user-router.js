import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user-controller.js";

const router = express.Router();

router.post("/register_user", createUser);
router.get("/users", getUsers);
router.get("/users/:id", getUser);
// router.get("/:id", getUser);
router.delete("/users/:id", deleteUser);

export default router;
