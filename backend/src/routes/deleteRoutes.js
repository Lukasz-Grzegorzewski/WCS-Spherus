const express = require("express");

const getRoutesFunctions = require("../handlers/deleteRoutesFunctions");

const router = express.Router();

router.delete("/users/:id", getRoutesFunctions.deleteUserById);
router.delete("/videos/:id", getRoutesFunctions.deleteVideoById);
router.delete("/categories/:id", getRoutesFunctions.deleteCategoryById);

module.exports = router;
