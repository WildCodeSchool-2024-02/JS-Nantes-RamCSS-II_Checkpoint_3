const tables = require('../../database/tables');

const tileExists = async (req, res, next) => {
  // eslint-disable-next-line camelcase
  const { coord_x, coord_y } = req.body;

    try {
    const tiles = await tables.tile.readByCoordinates(coord_x, coord_y);

    if (tiles && tiles.length > 0) {
      next();
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = tileExists;
