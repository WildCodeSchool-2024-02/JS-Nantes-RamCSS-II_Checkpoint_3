const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const boats = await tables.boat.readAll(req.query);

    // Respond with the boats in JSON format
    res.json(boats);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    // eslint-disable-next-line camelcase
    const { coord_x, coord_y } = req.body;
    const { id } = req.params;
    // eslint-disable-next-line camelcase
    const updateData = { coord_x, coord_y, id };
    const affectedRows = await tables.boat.update(updateData);

    if (affectedRows) { // Check if at least one row was affected
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
  edit
};

