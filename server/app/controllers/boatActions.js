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

const edit = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const affectedRows = await tables.boat.update({
      id: req.params.id,
      coord_x: req.body.coord_x,
      coord_y: req.body.coord_y,
    });

    if (affectedRows === 1) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }

  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  browse,
  edit,
};
