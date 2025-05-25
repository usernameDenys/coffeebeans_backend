import express from "express";
import {
  loginUser,
  registUser,
  // adminLogin,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registUser);
userRouter.post("/login", loginUser);
// userRouter.post("/admin", adminLogin);

export default userRouter;
