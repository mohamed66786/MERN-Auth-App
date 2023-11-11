import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
// import findeUser from "./modules/createUsers.js";
//connect to DB
connectDB();

// created users
// findeUser("mohamed", "MohamedMoMan", "999");
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // that to send form data as well and can send complex data like object and array
app.use(cookieParser());
// app.use(notFound);
app.use(errorHandler);
app.use("/api/users", userRoutes);

app.listen(port, () => console.log(`Server starting on ${port}`));
