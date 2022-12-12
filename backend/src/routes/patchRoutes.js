const express = require("express");

const router = express.Router();

const patchRoutesFunctions = require("../handlers/patchRoutesFunctions");

// router.get("/", getRoutesFunctions.welcome);

// router.get("/users", getRoutesFunctions.getUsers);
// router.get("/users/:id", getRoutesFunctions.getUserById);

// router.get("/favorites", getRoutesFunctions.getFavorites);
// router.get("/favorites/:id_user", getRoutesFunctions.getFavoritesByUserId);

// router.get("/videos", getRoutesFunctions.getVideos);
// router.get("/videos/:id", getRoutesFunctions.getVideoById);
// router.get("/videos/categories/:id_cat", getRoutesFunctions.getVideosByCategoryId);

// router.get("/categorys", getRoutesFunctions.getCategorys);
// router.get("/categorys/:id_cat", getRoutesFunctions.getCategoryById);

router.put("/hero_slider/:id", patchRoutesFunctions.updateHeroSliderById);

// router.get("/publicities/", getRoutesFunctions.getPublicities);
// router.get("/publicities/:id_pub", getRoutesFunctions.getPublicitiesById);

module.exports = router;
