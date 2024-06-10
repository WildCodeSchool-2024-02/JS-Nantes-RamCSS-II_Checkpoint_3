const tables = require("../../database/tables");

// tile is an object of type {x,y}
const tileExists = async (req, res, next) => {
  const tiles = await tables.tile.readByCoordinates(
    req.body.coord_x,
    req.body.coord_y
  );

  if (tiles.length) {
    next();
  } else {
    res.sendStatus(422);
  }
};

module.exports = tileExists;
