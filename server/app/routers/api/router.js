const express = require("express");
const tileExists = require("../../services/tileExists"); // Corrected path

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const boatsRouter = require("./boats/router");

router.use("/boats", boatsRouter);

const gamesRouter = require("./games/router");

router.use("/games", gamesRouter);

const tilesRouter = require("./tiles/router");

router.use("/tiles", tilesRouter);

const tileActions = require('../../controllers/tileActions');

router.get('/tiles', tileActions.browse);

const boatActions = require('../../controllers/boatActions');

router.put("/api/boats/:id", tileExists, (req, res) => {
    const { id } = req.params;
    const { coord_x: coordX, coord_y: coordY } = req.body;
    const boat = boatActions.update(id, coordX, coordY);
    if (boat) {
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});
/* ************************************************************************* */

module.exports = router;
