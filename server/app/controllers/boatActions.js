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


const edit = async (req, res) => {
  try {
    const { id } = req.params.id;
    const { coord_x, coord_y } = req.body;
    const updateBoatId = await tables.boat.update(coord_x, coord_y, id);
    if (updateBoatId) { res.sendStatus(204); }
    else { res.sendStatus(404); }
  } catch (err) {
    console.error(err);
  }

};

module.exports = { browse, edit };
