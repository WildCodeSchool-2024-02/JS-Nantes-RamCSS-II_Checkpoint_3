const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, update } = require("../../../controllers/boatActions");

router.get("/", browse);

// *creation de la route PUT
router.put("/:id", update);


/* ************************************************************************* */

module.exports = router;
