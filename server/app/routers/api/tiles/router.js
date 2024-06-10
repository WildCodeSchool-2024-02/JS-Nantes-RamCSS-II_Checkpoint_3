const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { tileExists } = require("../../../services/tileExists");
const { browse } = require("../../../controllers/tileActions");

router.get("/", tileExists, browse);

/* ************************************************************************* */

module.exports = router;
