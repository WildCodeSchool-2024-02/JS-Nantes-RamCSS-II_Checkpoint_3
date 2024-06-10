const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse } = require("../../../controllers/boatActions");
const { update } = require("../../../controllers/boatActions");

router.get("/", browse);
router.put('/api/boats/:id', browse, update);
/* ************************************************************************* */

module.exports = router;
