const express = require("express");

const router = express.Router();
const multer = require("multer");

const { hashPassword, verifyPassword } = require("../handlers/auth");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/assets/videos");
  },
  filename: (req, file, cb) => {
    const date = new Date().getTime();
    req.body.filename = `${req.body.title + date.toString()}.mp4`;
    cb(null, req.body.filename.toString());
  },
});

const upload = multer({ storage });

const storageImg = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/assets/images");
  },
  filename: (req, file, cb) => {
    const date = new Date().getTime();
    req.body.filename = `${req.body.name + date.toString()}.jpg`;
    cb(null, req.body.filename.toString());
  },
});
const uploadImg = multer({ storage: storageImg });

const postRoutesFunctions = require("../handlers/postRoutesFunctions");

router.post("/users", hashPassword, postRoutesFunctions.signInUserByUser);
router.post("/users/:id", postRoutesFunctions.uploadAvatarUrl);

router.post("/users/admin", postRoutesFunctions.signInUserByAdmin);

router.post(
  "/videos",
  upload.single("file"),
  postRoutesFunctions.postVideo,
  postRoutesFunctions.attachCategoryToVideo
);

router.post(
  "/",
  postRoutesFunctions.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.post("/category/video", postRoutesFunctions.attachCategoryToVideo);

router.post("/categories", postRoutesFunctions.postCategory);

router.post("/hero_slider", postRoutesFunctions.postHeroSlider);

router.post(
  "/publicity",
  uploadImg.single("file"),
  postRoutesFunctions.postAdvert
);

module.exports = router;
