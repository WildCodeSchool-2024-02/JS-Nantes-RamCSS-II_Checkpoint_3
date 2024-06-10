const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all tiles from the database
    const tiles = await tables.tile.readAll();

    // Respond with the tiles in JSON format
    res.json(tiles);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const body = {
      coord_x : req.body.coord_x,
      coord_y : req.body.coord_y
    }
    
    // Fetch tiles from the database by coordinates
    const tile = await tables.tile.readByCoordinates(body);

    // Respond with the tiles in JSON format
    res.json(tile);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};


module.exports = {
  browse, read
};