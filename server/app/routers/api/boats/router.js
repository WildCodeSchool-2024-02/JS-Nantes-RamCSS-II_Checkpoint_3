const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, update, edit } = require("../../../controllers/boatActions");

router.get("/", browse);

router.put("/:id", update);

router.post("/:id/edit", edit);

/* ************************************************************************* */

module.exports = router;
