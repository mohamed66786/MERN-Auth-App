// @desc Auth user/set tolken
// route POST api/users/auth
// @access Public
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import User from "../modules/userSchema.js";
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User Successfully" });
});

// @desc register
// route POST api/users/auth
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register User Successfully" });
});
// @desc logout user
// route POST api/users/auth
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User Successfully" });
});

// @desc get user profile
// route POST api/users/profile
// @access private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile" });
});

// @desc updata user profile
// route put api/users/profile
// @access private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "updating Profile Successfully" });
});

// const deleteAllUsers = asyncHandler(async (req, res) => {
//   mernAuth.users.deleteMany();
//   res.status(200).json({ message: "Delete All Users Successfully" });
// });
export {
  authUser,
  updateUserProfile,
  getUserProfile,
  registerUser,
  logoutUser,
  // deleteAllUsers,
};
