const express = require("express");

const getRoutesFunctions = require("../handlers/deleteRoutesFunctions");

const router = express.Router();

router.delete("/users/:id", getRoutesFunctions.deleteUserById);
router.delete("/users/avatars/:id", getRoutesFunctions.deleteAvatarByUserId);
router.delete("/videos/:id", getRoutesFunctions.deleteVideoById);
router.delete("/categories/:id", getRoutesFunctions.deleteCategoryById);
router.delete("/hero_slider/:id", getRoutesFunctions.deleteHeroSliderById);
router.delete("/fixtures/:id", getRoutesFunctions.deleteFixturesById);
router.delete("/publicities/:id", getRoutesFunctions.deletePublicityById);
router.delete("/home/:id", getRoutesFunctions.deleteHomeById);

module.exports = router;
