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

// *creation de l'action put
const update = async (req, res) => {
  const boat_id = req.params.id;
  const {coord_x, coord_y, name} = req.body;

  const boat = {
    "boat_id" : boat_id ,
    "coord_x" : coord_x ,
    "coord_y" : coord_y,
    "name" : name
    }
    
    const modify = await tables.boat.update(boat);
    

    if (update.affectedRows === 1) {
      res.json(modify);
      res.sendStatus(204);
  } else { 
      res.sendStatus(404);
  }

};

module.exports = {
  browse,
  update,
};
