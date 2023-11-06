import asyncHandler from "express-async-handler";
import User from "../modules/userSchema.js";
import generateToken from "../utils/generateToken.js";
// @desc    Auth user/set tolken
// route    POST api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  // Auth user means login user
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "Please enter email and password" });
    throw new Error();
  }
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400).json({ message: "Invalid email or password" });
    throw new Error("Invalid email or password");
  }
});

// @desc    register
// route    POST api/users/auth
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(404)
    throw new Error("Please Fill All fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({ name, email, password });
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});
// @desc    logout user
// route    POST api/users/auth
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
  // remove the cookie
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User logged out" });
});

// @desc    get user profile
// route    POST api/users/profile
// @access  private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile" });
});

// @desc    updata user profile
// route    put api/users/profile
// @access  private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "updating Profile Successfully" });
});

const deleteAllUsers = asyncHandler(async (req, res) => {
  await User.deleteMany();
  res.status(202).json({ message: "Delete All Users Successfully" });
});
export {
  authUser,
  updateUserProfile,
  getUserProfile,
  registerUser,
  logoutUser,
  deleteAllUsers,
};
