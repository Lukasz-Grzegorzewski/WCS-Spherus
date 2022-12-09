const express = require("express");

const router = express.Router();

const getRoutesFunctions = require("../handlers/getRoutesFunctions");

router.get("/", getRoutesFunctions.welcome);

router.get("/users", getRoutesFunctions.getUsers);
router.get("/users/:id", getRoutesFunctions.getUserById);

router.get("/favorites", getRoutesFunctions.getFavorites);
router.get("/favorites/:id_user", getRoutesFunctions.getFavoritesByUserId);

router.get("/videos", getRoutesFunctions.getVideos);
router.get("/videos/:id", getRoutesFunctions.getVideoById);
router.get(
  "/videos/categories/:idCat",
  getRoutesFunctions.getVideosByCategoryId
);
router.get(
  "/videos/cat/:idVid",
  getRoutesFunctions.getVideosAndCategoryByVideoId
);

router.get("/categories", getRoutesFunctions.getCategorys);
router.get("/categories/:id_cat", getRoutesFunctions.getCategoryById);

router.get("/hero_slider", getRoutesFunctions.getHeroSliderVideos);

router.get("/publicities/", getRoutesFunctions.getPublicities);
router.get("/publicities/:id_pub", getRoutesFunctions.getPublicitiesById);

module.exports = router;
