const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, edit } = require("../../../controllers/boatActions");
const validateCoordinates = require("../../../services/tileExists");

router.get("/", browse);
router.put("/:id", validateCoordinates, edit);

/* ************************************************************************* */

module.exports = router;
