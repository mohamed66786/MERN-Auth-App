import express from "express";
import {
  authUser,
  updateUserProfile,
  getUserProfile,
  registerUser,
  logoutUser,
  // deleteAllUsers,
} from "../controller/userController.js";

const router = express.Router();

router.post("/auth", authUser);
router.post("/register", registerUser);
router.post("/logout", logoutUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
// router.delete("/deleteAll", deleteAllUsers);

export default router;
