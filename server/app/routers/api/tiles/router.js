const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse } = require('../../../controllers/tileActions')

router.get('/', browse);

/* ************************************************************************* */


// router.put('/:id', validateCoordonate, edit);

// router.post('/', validateCoordonate, add);

/* ************************************************************************* */

module.exports = router;
