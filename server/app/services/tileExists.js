const tables = require("../../database/tables");

module.exports = async (req, res, next) => {
    const { coord_x: coordX, coord_y: coordY } = req.body;
    const tile = await tables.tile.readByCoordinates(coordX, coordY);
    if (tile.length) {
        next();
    } else {
        res.sendStatus(422);
    }
};
