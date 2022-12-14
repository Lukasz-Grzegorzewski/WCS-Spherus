const express = require("express");

const router = express.Router();

const postRoutesFunctions = require("../handlers/postRoutesFunctions");

router.post("/users", postRoutesFunctions.signInUserByUser);
router.post("/users/admin", postRoutesFunctions.signInUserByAdmin);

router.post("/videos", postRoutesFunctions.postVideo);
router.post("/category/video", postRoutesFunctions.attachCategoryToVideo);

router.post("/categories", postRoutesFunctions.postCategory);

router.post("/hero_slider", postRoutesFunctions.postHeroSlider);

module.exports = router;
