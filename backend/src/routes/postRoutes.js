const express = require("express");

const router = express.Router();
const multer = require("multer");

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
const postRoutesFunctions = require("../handlers/postRoutesFunctions");

router.post("/users", postRoutesFunctions.signInUserByUser);
router.post("/users/admin", postRoutesFunctions.signInUserByAdmin);

router.post("/videos", upload.single("file"), postRoutesFunctions.postVideo);
router.post("/category/video", postRoutesFunctions.attachCategoryToVideo);

router.post("/categories", postRoutesFunctions.postCategory);

router.post("/hero_slider", postRoutesFunctions.postHeroSlider);

module.exports = router;
