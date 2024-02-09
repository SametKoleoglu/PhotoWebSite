import express from "express";
import {
  createUser,
  loginUser,
  getDashboardPage,
  getAllUsers,
  getAUser,
  follow,
  unfollow,
} from "../controllers/userController.js";
import { authenticatedToken } from "../middlewares/AuthMiddlewares.js";

const router = express.Router();

router.route("/register").post(createUser);
router.route("/login").post(loginUser);
router.route("/dashboard").get(authenticatedToken, getDashboardPage);
router.route("/").get(authenticatedToken, getAllUsers);
router.route("/:id").get(authenticatedToken, getAUser);
router.route("/:id/follow").put(authenticatedToken, follow);
router.route("/:id/unfollow").put(authenticatedToken, unfollow);

export default router;
