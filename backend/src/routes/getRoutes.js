const express = require("express");

const router = express.Router();
// const { verifyToken } = require("../handlers/auth");

const getRoutesFunctions = require("../handlers/getRoutesFunctions");
/* router */
router.get("/", getRoutesFunctions.welcome);

/* user */

router.get("/users", getRoutesFunctions.getUsers);

router.get("/users/:id", getRoutesFunctions.getUserById);

/* favorites */
router.get("/favorites", getRoutesFunctions.getFavorites);
router.get("/favorites/:id_user", getRoutesFunctions.getFavoritesByUserId);

/* videos */
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
// router.get("/videos/last/:url", getRoutesFunctions.getLastVideos);

/* categories */
router.get("/categories", getRoutesFunctions.getCategorys);
router.get("/categories/:id_cat", getRoutesFunctions.getCategoryById);

// HeroSlider Component
router.get("/hero_slider", getRoutesFunctions.getHeroSliderVideos);
router.get("/hero_slider/table", getRoutesFunctions.getHeroSliderTable);
router.get(
  "/hero_slider/catname/:id",
  getRoutesFunctions.getCatNameVideoSliderById
);

// Advert
router.get("/publicities/", getRoutesFunctions.getPublicities);
router.get("/publicities/:id_pub", getRoutesFunctions.getPublicitiesById);

module.exports = router;
