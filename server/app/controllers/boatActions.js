/* eslint-disable camelcase */
const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const boats = await tables.boat.readAll();

    // Respond with the boats in JSON format
    res.json(boats);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Fonction visant à mettre à jour un bateau dans la base de donnée
const edit = async (req, res) => {
  const {id} = req.params
  const { tile_id, type, coor_x, coord_y } = req.body;
  const updateBoatActions = await tables.tile.update(
    tile_id,
    type,
    coor_x,
    coord_y,
    id
  );
  if (updateBoatActions) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
};

module.exports = { browse, edit };
