const express = require("express");

const router = express.Router();

const patchRoutesFunctions = require("../handlers/patchRoutesFunctions");

// router.get("/", getRoutesFunctions.welcome);

// router.get("/users", getRoutesFunctions.getUsers);
router.patch("/videos/:id", patchRoutesFunctions.patchVideoById);
router.patch("/users/:id", patchRoutesFunctions.patchUserById);
router.patch("/categories/:id", patchRoutesFunctions.patchCategoryById);

module.exports = router;
