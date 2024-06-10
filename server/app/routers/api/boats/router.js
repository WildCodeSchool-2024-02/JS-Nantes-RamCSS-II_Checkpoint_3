const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, edit } = require("../../../controllers/boatActions");
const validateCoordinate = require('../../../services/tileExists')


router.get("/", browse);

router.put('/:id', validateCoordinate, edit);

/* ************************************************************************* */

module.exports = router;
