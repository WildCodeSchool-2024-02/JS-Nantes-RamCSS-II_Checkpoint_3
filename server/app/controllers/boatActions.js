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
     const body = {
      id : req.params.id,
      coordX : req.body.coord_x,
      coordY : req.body.coord_y
    }

    const updateBoat = await tables.boat.update(body);

    if (updateBoat === 1) {
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
  browse, edit
};
