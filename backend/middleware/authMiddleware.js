import Jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../modules/userSchema.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt;
  if (token) {
    const decoded = Jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(401).json({message:"Not authorized, invalid token"});
      throw new Error();
    }
  } else {
    res.status(401).json({message:"Not authorized, no token"});
    throw new Error();
  }
});
export { protect };
