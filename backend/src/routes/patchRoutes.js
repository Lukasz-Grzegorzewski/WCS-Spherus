const express = require("express");

const router = express.Router();

const patchRoutesFunctions = require("../handlers/patchRoutesFunctions");

router.patch("/videos/:id", patchRoutesFunctions.patchVideoById);
router.patch("/users/:id", patchRoutesFunctions.patchUserById);
router.patch("/categories/:id", patchRoutesFunctions.patchCategoryById);

router.put("/hero_slider/:id", patchRoutesFunctions.updateHeroSliderById);

module.exports = router;
