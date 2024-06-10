const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, read } = require("../../../controllers/tileActions");

router.get("/", browse);

router.get("/:coord_x, coord_y", read);


/* ************************************************************************* */

module.exports = router;
