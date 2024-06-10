/* eslint-disable camelcase */
const tables = require("../../database/tables");

const tileExists = async (req, res, next) => {
  try {
    const { coord_x, coord_y } = req.body;
    const tiles = await tables.tile.readByCoordinates(coord_x, coord_y);

    if (tiles.length === 0) {
      res.sendStatus(422); // Pas de tuile trouvée
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {tileExists} ;
