const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { musicsRead } = require("../../../controllers/musicRead");

router.get("/",  musicsRead);

/* ************************************************************************* */

module.exports = router;
