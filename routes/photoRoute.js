import express from "express";
import {
  createPhoto,
  getAPhoto,
  getAllPhotos,
  deletePhoto,
  updatePhoto,
} from "../controllers/photoController.js";

const router = express.Router();

router.route("/").post(createPhoto).get(getAllPhotos); //tek satırda yazımı
// router.route("/").get(getAllPhotos);

router.route("/:id").get(getAPhoto);
router.route("/:id").delete(deletePhoto);
router.route("/:id").put(updatePhoto);

export default router;
