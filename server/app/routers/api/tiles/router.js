const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { tile } = require("../../../controllers/tileActions");

router.get("/api/tiles", tile);

/* ************************************************************************* */

module.exports = router;
