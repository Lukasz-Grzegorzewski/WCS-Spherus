const express = require("express");

const getRoutesFunctions = require("../handlers/deleteRoutesFunctions");

const router = express.Router();

router.delete("/users/:id", getRoutesFunctions.deleteUserById);
router.delete("/videos/:id", getRoutesFunctions.deleteVideoById);
router.delete(
  "/videos/cat/:idVid/:idCat",
  getRoutesFunctions.deleteVideoByIdFromCat
);
router.delete("/categories/:id", getRoutesFunctions.deleteCategoryById);
router.delete("/hero_slider/:id", getRoutesFunctions.deleteHeroSliderById);
router.delete("/publicities/:id", getRoutesFunctions.deletePublicityById);

module.exports = router;
